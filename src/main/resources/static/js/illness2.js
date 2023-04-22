  const urlParams = new URLSearchParams(window.location.search);
    const illnessValue = urlParams.get('illness');
    const dosageValue = urlParams.get('dosage');

    const jsonData = {
      "eyes": {
        "lutein": {
          "name": "lutein",
          "description": "# 노화로 인해 감소될 수 있는 황반색소밀도를 유지하여 눈건강에 도움을 줄 수 있음.\nㅤ\n # 1일 섭취량 : 성인 20mg \nㅤㅤ"
        }
      },
      "antioxidation": {
        "vitaminC": {
          "name": "vitaminC",
          "description": "# 결합조직 형성과 기능유지에 필요\nㅤ \n# 철의 흡수에 필요 \nㅤ \n# 항산화 작용을 하여 유해산소로부터 세포를 보호하는데 필요\nㅤ \n# 1일 섭취량 : 영, 유아의 경우 35-45 mg, 아동은 50-90 mg, 성인은 100 mg, 임산부와 흡연자는 130-140 mg \nㅤ"
        }
      },
      "joint": {
        "calcium": {
          "name": "calcium",
          "description": "# 뼈와 치아 형성에 필요 \nㅤ \n# 신경과 근육 기능 유지에 필요\nㅤ \n# 정상적인 혈액응고에 필요\nㅤ \n# 골다공증발생 위험 감소에 도움을 줌\nㅤ \n# 1일 섭취량: 성인 6~700mg \nㅤ"
        }
      }
    };

    const luteinDescription = jsonData.eyes.lutein.description;
    const vitaminCDescription = jsonData.antioxidation.vitaminC.description;
    const calciumDescription = jsonData.joint.calcium.description;

    const luteinHeader = document.createElement('h4');
    luteinHeader.textContent = '루테인';
    const luteinList = document.createElement('ul');
    const luteinListItems = luteinDescription.split('\n');
    for (let i = 0; i < luteinListItems.length; i++) {
      const luteinListItem = document.createElement('li');
      luteinListItem.textContent = luteinListItems[i];
      luteinList.appendChild(luteinListItem);
    }
    const luteinImage = document.createElement('img');
    luteinImage.src = '/img/영양제-루테인.jpg';


    const vitaminCHeader = document.createElement('h4');
    vitaminCHeader.textContent = '비타민 C';
    const vitaminCList = document.createElement('ul');
    vitaminCList.style.whiteSpace = 'pre-line'; // add this line to set the CSS property
    const vitaminCListItems = vitaminCDescription.split('\n');
    for (let i = 0; i < vitaminCListItems.length; i++) {
      const vitaminCListItem = document.createElement('li');
      vitaminCListItem.textContent = vitaminCListItems[i];
      vitaminCList.appendChild(vitaminCListItem);
    }

    const calciumHeader = document.createElement('h4');
    calciumHeader.textContent = '칼슘ㆍ마그네슘';
    const calciumList = document.createElement('ul');
    const calciumListItems = calciumDescription.split('\n');
    for (let i = 0; i < calciumListItems.length; i++) {
      const calciumListItem = document.createElement('li');
      calciumListItem.textContent = calciumListItems[i];
      calciumList.appendChild(calciumListItem);
    }

    /*성분설명 내부 글자크기*/
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      h4 {
        font-size: 20px;
      }
      ul li {
        font-size: 16px;
      }
    `;
    document.head.appendChild(styleElement);

    const omega3Div = document.getElementById('omega3');
    const probioticsDiv = document.getElementById('probiotics');
    const hyalsDiv = document.getElementById('hyals');
    omega3Div.innerHTML = '';
    probioticsDiv.innerHTML = '';
    hyalsDiv.innerHTML = '';
    /* 성분설명 */
    if (illnessValue === 'eyes') {
      omega3Div.style.setProperty('background-color', 'rgba(249, 212, 191, 0.5)');
      omega3Div.appendChild(luteinHeader);
      omega3Div.appendChild(luteinList);

    } else if (illnessValue === 'antioxidation') {
      probioticsDiv.style.setProperty('background-color', 'lightyellow');
      probioticsDiv.appendChild(vitaminCHeader);
      probioticsDiv.appendChild(vitaminCList);

    } else if (illnessValue === 'joint') {
      hyalsDiv.style.setProperty('background-color', 'rgba(234, 233, 233, 0.5)');
      hyalsDiv.appendChild(calciumHeader);
      hyalsDiv.appendChild(calciumList);

    } else if (illnessValue === 'eyes,joint') {
      omega3Div.style.setProperty('background-color', 'rgba(249, 212, 191, 0.5)');
      omega3Div.appendChild(luteinHeader);
      omega3Div.appendChild(luteinList);
      hyalsDiv.style.setProperty('background-color', 'rgba(234, 233, 233, 0.5)');
      hyalsDiv.appendChild(calciumHeader);
      hyalsDiv.appendChild(calciumList);

    } else if (illnessValue === 'eyes,antioxidation') {
      omega3Div.style.setProperty('background-color', 'rgba(249, 212, 191, 0.5)');
      omega3Div.appendChild(luteinHeader);
      omega3Div.appendChild(luteinList);
      probioticsDiv.style.setProperty('background-color', 'lightyellow');
      probioticsDiv.appendChild(vitaminCHeader);
      probioticsDiv.appendChild(vitaminCList);

    } else if (illnessValue === 'joint,antioxidation') {
      hyalsDiv.style.setProperty('background-color', 'rgba(234, 233, 233, 0.5)');
      hyalsDiv.appendChild(calciumHeader);
      hyalsDiv.appendChild(calciumList);
      probioticsDiv.style.setProperty('background-color', 'lightyellow');
      probioticsDiv.appendChild(vitaminCHeader);
      probioticsDiv.appendChild(vitaminCList);

    } else {
      omega3Div.style.setProperty('background-color', 'rgba(249, 212, 191, 0.5)');
      omega3Div.appendChild(luteinHeader);
      omega3Div.appendChild(luteinList);
      probioticsDiv.style.setProperty('background-color', 'lightyellow');
      probioticsDiv.appendChild(vitaminCHeader);
      probioticsDiv.appendChild(vitaminCList);
      hyalsDiv.style.setProperty('background-color', 'rgba(234, 233, 233, 0.5)');
      hyalsDiv.appendChild(calciumHeader);
      hyalsDiv.appendChild(calciumList);
    }
