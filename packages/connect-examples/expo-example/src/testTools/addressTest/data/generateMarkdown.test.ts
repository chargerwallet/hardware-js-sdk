import { singleAddressTestCount24Two as AddressTestData } from './count24_two';

function getTestChainName(chain?: string, name?: string) {
  if (chain) {
    //  chain 
    const parts = chain.split('-');
    //  CamelCase 
    const firstWordMatch = parts[0].match(/^[a-z]+|[A-Z][a-z]*/g);
    let firstPart = '';
    if (firstWordMatch && firstWordMatch.length > 0) {
      const firstWord = firstWordMatch[0];
      firstPart = firstWord.charAt(0).toUpperCase() + firstWord.slice(1); // 
    }
    const secondPart = parts.length > 1 ? parts[1] : '';
    return `${firstPart} ${secondPart}`.trim(); // 
  }
  if (name) {
    // camelCase
    const firstWordMatch = name.match(/^[a-z]+|[A-Z][a-z]*/g);
    if (firstWordMatch && firstWordMatch.length > 0) {
      const firstWord = firstWordMatch[0];
      return firstWord.charAt(0).toUpperCase() + firstWord.slice(1); //
    }
  }
  return ''; //chain name 
}

describe('generate markdown', () => {
  it('run', () => {
    const testDataList = AddressTestData.splice(1);

    const data = testDataList[0];
    const caseSize = testDataList.length;

    const title = `| Test Chain | Derivation Path |${' Address |'.repeat(caseSize)}`;
    const split = `|---|---|${'---|'.repeat(caseSize)}`;

    let passphraseState = `| | |`;
    testDataList.forEach(item => {
      const passphrase = item.extra?.passphrase ?? '';
      passphraseState += ` ${passphrase} |`;
    });

    const markdownTable = [title, split, passphraseState];

    let tempTitle = '';
    data.data.forEach((item, index) => {
      let path = '';
      const isCardano = item.method === 'cardanoGetAddress';
      if (isCardano) {
        path = `path: \`\`\`${item.params.addressParameters.path}\`\`\` stakingPath: \`\`\`${item.params.addressParameters.stakingPath}\`\`\``;
      } else {
        path = `\`\`\`${item.params.path}\`\`\``;
      }

      const chain = getTestChainName(item.name, item.method);
      let title = '';
      if (chain !== tempTitle) {
        title = chain;
      }

      let row = `| ${title} | ${path} |`;

      testDataList.forEach(item => {
        const { address } = item.data[index].result;
        row += ` ${address} |`;
      });

      tempTitle = chain;
      markdownTable.push(row);
    });

    console.log(markdownTable.join('\n'));
  });
});
