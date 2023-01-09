import { el, text } from "redom";
import invert from "lodash.invert";
import isEqual from "lodash.isequal";

class LayerSwitcher {
  constructor(layers, layersEnabled = []) {
    this._layers = layers;
    this._identifiers = this._initLayerIdentifiers();
    this.layersEnabled = layersEnabled;
    this._container = el("div", { class: "mapboxgl-ctrl layer-switcher-list" });
    this._container.appendChild(el("h3", "Layers"));
    this._visible = [...layersEnabled];
  }

  _initLayerIdentifiers() {
    let identifiers = {};
    Object.keys(this._layers)
      .sort()
      .forEach((layerName) => {
        let size = 1;
        let ident = null;
        do {
          ident = layerName.slice(0, size);
          size++;
        } while (ident in identifiers);
        identifiers[ident] = layerName;
      });
    return identifiers;
  }

  _getLayerIdentifiers() {
    let identifiers = [];
    let id_map = invert(this._identifiers);
    this._visible.sort().forEach((layerName) => {
      identifiers.push(id_map[layerName]);
    });
    return identifiers;
  }

  _updateVisibility() {
    var layers = this._map.getStyle().layers;
    for (let layer of layers) {
      let name = layer["id"];
      for (let layerName in this._layers) {
        let pref = this._layers[layerName];
        if (name.startsWith(pref)) {
          if (this._visible.includes(layerName)) {
            this._map.setLayoutProperty(name, "visibility", "visible");
          } else {
            this._map.setLayoutProperty(name, "visibility", "none");
          }
        }
      }
    }
    if (this.urlhash) {
      this.urlhash._updateHash();
    }
  }

  setInitialVisibility(style) {
    /**
     * Adding the layer switcher to the map after it's been initialised will result in the
     * hidden layers being briefly shown. To avoid this, we need to load the style into JS
     * first , and call the `setInitialVisibility` method on the loaded style object.
     */
    for (let layer of style["layers"]) {
      for (let layerName in this._layers) {
        let pref = this._layers[layerName];
        if (
          layer["id"].startsWith(pref) &&
          !this._visible.includes(layer["id"])
        ) {
          if (!("layout" in layer)) {
            layer["layout"] = {};
          }
          layer["layout"]["visibility"] = "none";
        }
      }
    }
  }

  getURLString() {
    if (!isEqual(this._visible.sort(), this.layersEnabled.sort())) {
      return this._getLayerIdentifiers().join(",");
    }
    return null;
  }

  setURLString(string) {
    if (string) {
      const ids = string.split(",");
      if (ids.length == 0) {
        this._visible = [...this.layersEnabled];
      } else {
        this._visible = ids
          .map((id) => this._identifiers[id])
          .filter((id) => id);
      }
    } else {
      this._visible = [...this.layersEnabled];
    }
    if (this._map) {
      this._updateVisibility();
    }
  }

  onAdd(map) {
    this._map = map;
    if (map.isStyleLoaded()) {
      this._updateVisibility();
    } else {
      map.on("load", () => {
        this._updateVisibility();
      });
    }
    this._createList();

    const wrapper = el("div", {
      class: "mapboxgl-ctrl mapboxgl-ctrl-group layer-switcher",
    });
    wrapper.appendChild(this._container);
    wrapper.onmouseover = (e) => {
      this._container.style.display = "block";
    };
    wrapper.onmouseout = (e) => {
      this._container.style.display = "none";
    };
    return wrapper;
  }

  _createList() {
    var list = el("ul");
    var i = 0;
    for (let name in this._layers) {
      let checkbox = el("input", {
        type: "checkbox",
        id: "layer" + i,
        checked: this._visible.includes(name),
      });
      let label = el("label", name, { for: "layer" + i });

      checkbox.onchange = (e) => {
        if (e.target.checked) {
          this._visible.push(name);
        } else {
          this._visible = this._visible.filter((item) => item !== name);
        }
        this._updateVisibility();
      };

      let li = el("li", [label, checkbox]);
      list.appendChild(li);
      i++;
    }
    this._container.appendChild(list);
  }
}

export { LayerSwitcher as default };
