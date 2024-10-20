import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

// Função para criar a pasta e os arquivos com um conteúdo padrão
function createFolderWithFiles(folderName: string) {
  const folderPath = path.join(__dirname, '..', folderName.replace(/[^a-z0-9]/gi, '_'));

  // Verifica se a pasta já existe
  if (!fs.existsSync(folderPath)) {
    // Cria a pasta
    fs.mkdirSync(folderPath);
    console.log(`Pasta '${folderName}' criada com sucesso.`);

    // Definindo o conteúdo padrão para os arquivos
    const indexContent = `export function sum(a: number, b: number) {}`;

    const specContent = `import {describe, it, expect} from 'bun:test';
    
describe('${folderName}', () => {});`;

    // Cria dois arquivos dentro da pasta com o conteúdo padrão
    const indexPath = path.join(folderPath, 'index.ts');
    const specPath = path.join(folderPath, 'index.spec.ts');

    fs.writeFileSync(indexPath, indexContent);
    fs.writeFileSync(specPath, specContent);

    console.log('Arquivos file1.ts e file2.ts criados com conteúdo padrão.');
  } else {
    console.log(`A pasta '${folderName}' já existe.`);
  }
}

// Função para perguntar o nome da pasta ao usuário
function askFolderName() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Digite o nome da pasta: ', (folderName) => {
    if (folderName) {
      createFolderWithFiles(folderName);
    } else {
      console.log('Nenhum nome de pasta foi fornecido.');
    }
    rl.close();
  });
}

// Inicia o processo perguntando o nome da pasta
askFolderName();