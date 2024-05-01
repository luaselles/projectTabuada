import http from 'http';
import url, { URLSearchParams } from 'url';

const host = 'localhost';
const porta = 3000; // maior que 1024
// 
function responderRequisicao(requisicao, resposta) {
    if (requisicao.method === "GET") {
        const dados = new URLSearchParams(url.parse(requisicao.url).query);

        // Params
        const tabuada = dados.get('tabuada');
        const sequencia = dados.get('sequencia');

        //
        resposta.setHeader('Content-Type', 'text/html');
        resposta.write('<html>');
        resposta.write('<meta charset="UTF-8"/>');
        resposta.write('<head>');
        resposta.write('<title>Projeto tabuada</title>');
        resposta.write('</head>');
        resposta.write('<body>');
        resposta.write('<html>');
        resposta.write('<p>Olá! Seja bem vindo ao projeto tabuada.</p>');

        if (tabuada) {
            if (sequencia) {
                for (var i = 0; i < sequencia; i++) {
                    resposta.write("<table>");
                    resposta.write("<tr>");
                    resposta.write("<td>" + tabuada + "</td>");
                    resposta.write("<td> X </td>");
                    resposta.write("<td>" + i + "</td>");
                    resposta.write("<td> = </td>");
                    resposta.write("<td>" + tabuada * i + "</td>");
                    resposta.write(" </tr>");
                    resposta.write("</table>");
                }
            }
            else {
                for (var i = 0; i < 11; i++) {
                    resposta.write("<table>");
                    resposta.write("<tr>");
                    resposta.write("<td>" + tabuada + "</td>");
                    resposta.write("<td> X </td>");
                    resposta.write("<td>" + i + "</td>");
                    resposta.write("<td> = </td>");
                    resposta.write("<td>" + tabuada * i + "</td>");
                    resposta.write(" </tr>");
                    resposta.write("</table>");
                }
            }
        }
        // Sem parametro 3 como padrão 
        else {
            for (var i = 0; i < 11; i++) {
                resposta.write("<table>");
                resposta.write("<tr>");
                resposta.write("<td>" + 3 + "</td>");
                resposta.write("<td> X </td>");
                resposta.write("<td>" + i + "</td>");
                resposta.write("<td> = </td>");
                resposta.write("<td>" + 3 * i + "</td>");
                resposta.write(" </tr>");
                resposta.write("</table>");
            }
        }

        resposta.write('</body>');
        resposta.write('<html>');
        resposta.end(); // nesse momento a resposta e enviada para o cliente //
    }

}

const servidor = http.createServer(responderRequisicao);
servidor.listen(porta, host, () => {
    console.log('Servidor escutando em http://' + host + ":" + porta);
})