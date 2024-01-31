from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
import json
from NLP.bot import get_response

class MyHandler(SimpleHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        if self.path == '/api/call_python_function':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            input_data = json.loads(post_data.decode('utf-8'))

            # Perform computation with the input data
            input_value = input_data["input"]
            # output_value = input_value * input_value  # Replace with your actual computation
            output_value = get_response(input_value)
            print(output_value)

            output_data = {'result': output_value}

            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
            self.end_headers()
            self.wfile.write(json.dumps(output_data).encode('utf-8'))
        else:
            super().do_GET()

if __name__ == '__main__':
    with TCPServer(('', 5001), MyHandler) as httpd:
        print('Server listening on port 5001...')
        httpd.serve_forever()
