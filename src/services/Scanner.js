import { createWorker } from "tesseract.js";

const worker = createWorker({
  logger: (m) => console.log(m),
});

export const Scanner = {
  scan: async (image) => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(image);
    await worker.terminate();
    return text;
  },
};
