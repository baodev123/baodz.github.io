const socket = io("https://node.tienganh123.com");

socket.onAny((event, ...args) => {
  console.log("Server gửi:", event, args);
});

// Khi đã biết chắc event nào chứa câu hỏi
let buffer = [];
socket.on("question", (msg) => {
  buffer.push(msg);

  if (buffer.length === 10) {
    const combined = buffer.join(" ");
    console.log("Ghép 10 câu thành:", combined);

    socket.emit("question", combined);
    buffer = [];
  }
});
