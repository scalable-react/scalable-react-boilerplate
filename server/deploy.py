from subprocess import call
import time
import os
import shutil

call(["npm", "run", "deploy"])
time.sleep(120)
src = './app/dist'
dest = './server/public'

def clearOldFiles(dir):
    old_files = os.listdir(dir)
    for file_name in old_files:
        full_file_name = os.path.join(dir, file_name)
        if (os.path.isfile(full_file_name)):
            os.remove(full_file_name)


def moveNewFiles(dir):
    for file_name in os.listdir(dir):
        full_file_name = os.path.join(src, file_name)
        if (os.path.isfile(full_file_name)):
            shutil.move(full_file_name, dest)


def main():
    clearOldFiles(dest)
    moveNewFiles(src)


main()