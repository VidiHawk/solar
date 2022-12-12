// import React from "react";
// import { OverlayView } from "react-google-maps";

// class Overlay extends OverlayView {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pane: this.props.paneParentToChild,
//       container: this.props.containerParentToChild,
//       position: this.props.positionParentToChild,
//     };
//   }

//   //   componentDidMount() {
//   //     this.getHistoricalRates(29);
//   //     this.fluctuationRate(30);
//   //     this.eurRates();
//   //     this.usdRates();
//   //   }

//   //   dateToday = () => {
//   //     const today = new Date();
//   //     const dateToday = today.toISOString().split("T")[0];
//   //     return dateToday;
//   //   };

//   //   usdRates = () => {
//   //     fetch("https://open.er-api.com/v6/latest/USD")
//   //       .then((res) => res.json())
//   //       .then((USD) => {
//   //         this.setState({
//   //           eurUsd: 1 / USD.rates.EUR,
//   //         });
//   //       });
//   //   };

//   onAdd = () => {
//     const pane = this.getPanes()?.[this.pane];
//     pane?.appendChild(this.container);
//   };

//   draw = () => {
//     const projection = this.getProjection();
//     const point = projection.fromLatLngToDivPixel(this.position);

//     if (point === null) {
//       return;
//     }

//     this.container.style.transform = `translate(${point.x}px, ${point.y}px)`;
//   };

//   onRemove = () => {
//     if (this.container.parentNode !== null) {
//       this.container.parentNode.removeChild(this.container);
//     }
//   };

//   render() {
//     const { eurUsd } = this.state;

//     return (
//       <>
//         <Header1 />
//       </>
//     );
//   }
// }

// export default Overlay;
