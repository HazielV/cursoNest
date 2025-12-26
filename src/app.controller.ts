import { Controller, Get, Header } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Header('Content-Type', 'text/html')
  getApiInfo() {
    return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mini Netflix API Docs</title>
        <style>
          body {
            background-color: #141414;
            color: #e5e5e5;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            display: flex;
            justify-content: center;
            padding-top: 50px;
            min-height: 100vh;
            margin: 0;
          }
          .container {
            background-color: #1f1f1f;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.5);
            max-width: 700px;
            width: 90%;
            border-top: 4px solid #e50914;
            margin-bottom: 50px;
          }
          h1 { color: #e50914; margin-bottom: 5px; text-align: center; letter-spacing: 1px; }
          .subtitle { text-align: center; color: #999; margin-bottom: 30px; font-size: 0.9em; }
          
          .card {
            background-color: #2b2b2b;
            padding: 15px;
            border-radius: 6px;
            margin-bottom: 20px;
            border-left: 3px solid #e50914;
          }
          .label { color: #aaa; font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px; }
          .value { font-family: 'Consolas', 'Monaco', monospace; font-size: 1.1em; color: #fff; background: rgba(0,0,0,0.2); padding: 4px 8px; border-radius: 4px; }
          
          h3 { margin-top: 30px; border-bottom: 1px solid #333; padding-bottom: 10px; }
          
          .endpoint-group { margin-bottom: 15px; }
          .endpoint {
            background: #262626;
            margin: 8px 0;
            padding: 12px 15px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: transform 0.2s;
          }
          .endpoint:hover { background-color: #303030; }
          
          .method { font-weight: bold; font-size: 0.8em; padding: 4px 8px; border-radius: 4px; min-width: 50px; text-align: center; margin-right: 15px; }
          .get { background-color: rgba(70, 211, 105, 0.2); color: #46d369; }
          .post { background-color: rgba(255, 193, 7, 0.2); color: #ffc107; }
          .patch { background-color: rgba(64, 196, 255, 0.2); color: #40c4ff; }
          .delete { background-color: rgba(229, 9, 20, 0.2); color: #e50914; }
          
          .url { font-family: 'Consolas', 'Monaco', monospace; flex-grow: 1; color: #ddd; font-size: 0.95em; }
          
          a.url { color: #46d369; text-decoration: none; border-bottom: 1px dashed #46d369; }
          a.url:hover { border-bottom: 1px solid #46d369; }
          
          .desc { font-size: 0.8em; color: #777; margin-left: 10px; display: none; }
          @media (min-width: 600px) { .desc { display: block; } }

        </style>
      </head>
      <body>
        <div class="container">
          <h1>NETFLIX API</h1>
          <div class="subtitle">Backend Final Exam • Status: <span style="color:#46d369">Online 🟢</span></div>

          <div class="card">
            <span class="label">🔑 Credenciales Admin (Para Login)</span>
            <div style="margin-bottom: 8px;">
              <span style="color:#aaa">Email:</span> <span class="value">admin@netflix.com</span>
            </div>
            <div>
              <span style="color:#aaa">Pass:</span> <span class="value">admin123456</span>
            </div>
          </div>

          <h3>🔐 Autenticación</h3>
          <div class="endpoint">
            <span class="method post">POST</span>
            <span class="url">/auth/login</span>
            <span class="desc">Obtener Token</span>
          </div>
          <div class="endpoint">
            <span class="method post">POST</span>
            <span class="url">/auth/register</span>
            <span class="desc">Crear Admin</span>
          </div>

          <h3>📺 Series</h3>
          <div class="endpoint">
            <span class="method get">GET</span>
            <a href="/series" target="_blank" class="url">/series</a>
            <span class="desc">Listar todas</span>
          </div>
          <div class="endpoint">
            <span class="method post">POST</span>
            <span class="url">/series</span>
            <span class="desc">Crear nueva</span>
          </div>
          <div class="endpoint">
            <span class="method get">GET</span>
            <a href="/series/1" target="_blank" class="url">/series/1</a>
            <span class="desc">Ver detalle</span>
          </div>
          <div class="endpoint">
            <span class="method patch">PATCH</span>
            <span class="url">/series/1</span>
            <span class="desc">Editar</span>
          </div>
          <div class="endpoint">
            <span class="method delete">DEL</span>
            <span class="url">/series/1</span>
            <span class="desc">Eliminar</span>
          </div>

          <h3>🎞️ Episodios</h3>
          <div class="endpoint">
            <span class="method get">GET</span>
            <a href="/episodios" target="_blank" class="url">/episodios</a>
            <span class="desc">Ver todos</span>
          </div>
           <div class="endpoint">
            <span class="method post">POST</span>
            <span class="url">/episodios</span>
            <span class="desc">Crear</span>
          </div>
           <div class="endpoint">
            <span class="method get">GET</span>
            <a href="/episodios/1" target="_blank" class="url">/episodios/1</a>
            <span class="desc">Ver detalle</span>
          </div>
          <div class="endpoint">
            <span class="method patch">PATCH</span>
            <span class="url">/episodios/1</span>
            <span class="desc">Editar</span>
          </div>
          <div class="endpoint">
            <span class="method delete">DEL</span>
            <span class="url">/episodios/1</span>
            <span class="desc">Eliminar</span>
          </div>

          <div style="margin-top: 40px; text-align: center; border-top: 1px solid #333; padding-top: 20px;">
             <a href="https://github.com/HazielV/cursoNest" target="_blank" style="color: #666; text-decoration: none; font-size: 0.9em;">
               <span style="font-size: 1.2em; vertical-align: middle;">📂</span> Ver Repositorio en GitHub
             </a>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}
