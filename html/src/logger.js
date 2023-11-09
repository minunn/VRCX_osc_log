class Logger {
  constructor() {
    this.logEndpoint = 'http://localhost:3000/log';
  }

  log(message) {
    const logEntry = `${message}`;
      this.sendToServer(logEntry);
  }

  info(message) {
    const logEntry = `[INFO] ${message}`;
      this.sendToServer(logEntry);
  }

  command(message) {
    const logEntry = `[COMMAND] ${message}`;
      this.sendToServer(logEntry);
  }

  sendToServer(logEntry) {
    fetch(this.logEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: logEntry,
    })
      .then((response) => {
        if (!response.ok) {
          console.error('Error sending log to server:', response.status, response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error sending log to server:', error);
      });
  }
}

const self = new Logger();
window.logger = self;

export { self as default, Logger };