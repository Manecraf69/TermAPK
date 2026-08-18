# TermAPK

Jogo de palavras baseado em `principal.html`, empacotado como aplicativo portátil para Windows.

## Requisitos para desenvolvimento

- Node.js 20 ou superior
- Windows 10 ou superior

O Node.js e as dependências são necessários apenas para desenvolver e gerar o executável. Quem receber o `.exe` não precisa instalar Node.js.

## Executar localmente

Instale as dependências:

```powershell
npm install
```

Abra o aplicativo em modo de desenvolvimento:

```powershell
npm start
```

## Gerar o executável portátil

Execute:

```powershell
npm run build
```

O arquivo será gerado em:

```text
temp/dist/TermAPK-Portable.exe
```

Esse arquivo é o aplicativo portátil: pode ser copiado e executado diretamente, sem instalador e sem pastas adicionais. O executável inclui o Electron e o conteúdo necessário do jogo.

## Conteúdo empacotado

O build inclui somente:

- `principal.html`
- `main.js`, que inicia a janela do aplicativo
- arquivos mínimos de configuração do Electron

`editor.html` e `Rabito.png` não fazem parte do executável. A imagem já está incorporada no `principal.html`.

Os arquivos temporários e o resultado do build ficam dentro de `temp/`, que não é versionada pelo Git.
