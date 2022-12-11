# Here are a few functions that may come handy when preparing imagery for a new website

# You will have to install PIL using sudo pip3 install Pillow
from xml.dom.minidom import parseString
from PIL import Image
from pathlib import Path
import os, sys

path = "public/assets/images/generators/"
dirs = os.listdir(path)
pic = "vidifx-icon.png"

print(dirs)


def resize_all_square_imgs():
    for item in dirs:
        if os.path.isfile(path + item):
            if item.endswith(".jpg"):
                im = Image.open(path + item)
                # f, e = os.path.splitext(path + item)
                # imResize = im.resize((24, 24), Image.ANTIALIAS)
                # imResize.save(f + "/24resized.png", "PNG", quality=100)
                # imResize = im.resize((36, 36), Image.ANTIALIAS)
                # imResize.save(f + "/36resized.png", "PNG", quality=100)
                # im.thumbnail((180, 180), Image.ANTIALIAS)
                im = im.resize((752, 450), Image.ANTIALIAS)
                # im.save(target_path + item + ".png", "PNG", quality=100)
                im.save(path + item, "JPEG", quality=100)
                print(path + item)


def resize_all_based_on_width():
    basewidth = 200
    for item in dirs:
        if os.path.isfile(path + item):
            if item.endswith(".png"):
                im = Image.open(path + item)
                wpercent = basewidth / float(im.size[0])
                hsize = int((float(im.size[1]) * float(wpercent)))
                im = im.resize((basewidth, hsize), Image.ANTIALIAS)
                im.save(path + item, "PNG", quality=100)
                print(path + item)


def resize_all_based_on_height():
    baseheight = 50
    for item in dirs:
        if os.path.isfile(path + item):
            if item.endswith(".png"):
                im = Image.open(path + item)
                hpercent = baseheight / float(im.size[1])
                width = int((float(im.size[0]) * float(hpercent)))
                im = im.resize((width, baseheight), Image.ANTIALIAS)
                im.save(path + item, "PNG", quality=100)
                print(path + item)


def convert_to_webp(path):
    # Convert all images in a folder to webp
    print("starting...")
    paths = Path(path).glob("*.png")
    for path in paths:
        webp_path = path.with_suffix(".webp")
        image = Image.open(path)
        image.save(webp_path, format="webp")
        print(path)


def generate_icons(pic):
    im = Image.open(pic)
    # Just create 2 new lines per image size required
    imResize = im.resize((16, 16), Image.ANTIALIAS)
    imResize.save("16x16favicon.ico", "ICO", quality=100)
    imResize = im.resize((32, 32), Image.ANTIALIAS)
    imResize.save("favicon.ico", "ICO", quality=100)
    imResize = im.resize((48, 48), Image.ANTIALIAS)
    imResize.save("icon-48x48.png", "PNG", quality=100)
    imResize = im.resize((72, 72), Image.ANTIALIAS)
    imResize.save("icon-72x72.png", "PNG", quality=100)
    imResize = im.resize((96, 96), Image.ANTIALIAS)
    imResize.save("icon-96x96.png", "PNG", quality=100)
    imResize = im.resize((144, 144), Image.ANTIALIAS)
    imResize.save("icon-144x144.png", "PNG", quality=100)
    imResize = im.resize((192, 192), Image.ANTIALIAS)
    imResize.save("logo192.png", "PNG", quality=100)
    imResize = im.resize((256, 256), Image.ANTIALIAS)
    imResize.save("icon-256x256.png", "PNG", quality=100)
    imResize = im.resize((384, 384), Image.ANTIALIAS)
    imResize.save("icon-384x384.png", "PNG", quality=100)
    imResize = im.resize((512, 512), Image.ANTIALIAS)
    imResize.save("logo512.png", "PNG", quality=100)


# generate_icons(pic)
resize_all_square_imgs()