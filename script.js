const convertToBinary = () => {
    const inputValue = document.getElementById('inputValue').value.trim();
  
    if (!/^\d+$/.test(inputValue)) {
      displayResult('Por favor, insira um número válido.');
      return;
    }
  
    const { binaryResult, explanation } = calculateBinary(BigInt(inputValue));
    displayResult(binaryResult, explanation);
  };
  
  const calculateBinary = (value) => {
    let binaryResult = '';
    let explanation = '';
    let foundFirstOne = false;
  
    if (value === 0n) {
      binaryResult = '0';
      explanation = 'O número binário de 0 é 0';
    } else {
      let bitValue = 2n ** 301n;
  
      while (bitValue > 0n) {
        const bit = value >= bitValue ? 1n : 0n;
  
        if (bit === 1n) {
          foundFirstOne = true;
        }
  
        if (foundFirstOne) {
          binaryResult += bit;
          if (bitValue > 1n) {
            explanation += `${bitValue} = ${bit}<br>`;
          } else {
            explanation += `${bitValue} = ${bit}`;
          }
        }
  
        value %= bitValue;
        bitValue /= 2n;
      }
    }
  
    return { binaryResult, explanation };
  };
  
  const displayResult = (binaryResult, explanation) => {
    document.getElementById('result').innerHTML = `
      <p class="text-lg font-medium mb-2">Resultado Binário:</p>
      <p class="mb-4">${binaryResult}</p>
      <p class="text-lg font-medium mb-2">Explicação:</p>
      <div>${explanation}</div>
    `;
  };
  