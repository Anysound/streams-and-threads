const server = http.createServer((req, res) => {
  fs.createReadStream("text.txt").pipe(res);
});

const zlib = require('zlib');

const readStream = fs.createReadStream('text.txt');
const writeStream = fs.createWriteStream('new-text.txt');
const compressStream = zlib.createGzip();

readStream.pipe(compressStream).pipe(writeStream);

a.pipe(b).pipe(c).pipe(d);
// =
a.pipe(b);
b.pipe(c);
c.pipe(d);

readable.on("data", (chunk) => {
    writable.write(chunk);
});

readable.on("end", (chunk) => {
    writable.end();
});

readable.on("error", (err) => {
    // handle(err)
})

async function write(writable, data) {
    return new Promise((resolve) => {
        const isReady = writable.write(data);
        if (isReady) {
            return resolve();
        }
        writable.once("drain", resolve);
    });
}