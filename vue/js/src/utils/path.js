import fs from "fs";
import path from "path";

export async function getAllChildDir(filePath) {
  const pathIsDir = await isDir(filePath);
  if (!pathIsDir) throw Error("根路径非文件夹，请检查");

  const result = [];

  await readAllDir(filePath, result);
  console.log(result, "result");

  return result;
}

/**
 * 递归获取路径下所有子文件夹
 * @param {*} filePath
 * @param {*} result
 * @returns
 */
function readAllDir(filePath, result) {
  return new Promise((resolve, reject) => {
    fs.readdir(filePath, (err, files) => {
      if (err) throw Error(err);

      console.log(files, "files");
      files.forEach(async (file, index) => {
        const dirname = path.join(filePath, file);
        const isDirRes = await isDir(dirname);
        if (isDirRes) {
          result.push(dirname);
          if (index === files.length - 1) resolve();
          await readAllDir(dirname, result);
        }
      });
    });
  });
}

/**
 * 判断是否是文件夹
 * @param {*} path
 * @returns
 */
function isDir(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) reject(err);
      if (!stats) resolve(false);
      else resolve(stats.isDirectory());
    });
  });
}

/**
 * 获取第一层子路径中的文件夹名和路径
 * @param {*} filePath
 */
export function getChildDirname(filePath) {
  let result = [];

  return new Promise((resolve, reject) => {
    fs.readdir(filePath, (err, files) => {
      if (err) reject(err);

      console.log(files, "files");
      files.forEach(async (file, index) => {
        const dirname = path.join(filePath, file);
        const isDirRes = await isDir(dirname);
        if (isDirRes) {
          result.push({
            name: file,
            path: dirname,
          });
          if (index === files.length - 1) resolve();
        }
      });
    });
  });
}
