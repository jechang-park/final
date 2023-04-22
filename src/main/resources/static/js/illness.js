  const urlParams = new URLSearchParams(window.location.search);
    const illnessValue = urlParams.get('illness');
    const dosageValue = urlParams.get('dosage');

    const nutrient_data = {
      "eyes": {
        "lutein": {
          "name": "lutein",
          "description": "# 노화로 인해 감소될 수 있는 황반색소밀도를 유지하여 눈건강에 도움을 줄 수 있음.\nㅤ\n # 1일 섭취량 : 성인 20mg \nㅤㅤ"
        }
      },
     "blood_circulation": {
        "omega3": {
          "name": "omega 3",
          "description": "# Helps improve blood triglycerides\n\n # Helps improve blood circulation\n\n # Recommended daily intake: 1,000mg for adults\n",
          "image": "/img/프로메가오메가3.jpg",
          "link": "https://search.shopping.naver.com/catalog/21839321494?query=%EC%98%A4%EB%A9%94%EA%B0%803&NaPm=ct%3Dlgk86zo0%7Cci%3Daab56bbae994c01b9c17472b65b8e5df198d71a6%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D07a53635ea041363f45bacdbe51195011f956f24"
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

    const luteinDescription = nutrient_data.eyes.lutein.description;
    const vitaminCDescription = nutrient_data.antioxidation.vitaminC.description;
    const calciumDescription = nutrient_data.joint.calcium.description;

if (illness === "eyes") {
  const nutrient = nutrient_data.eyes.lutein;
  document.getElementById('illness-value').textContent = nutrient.name;
  document.getElementById('content-desc').textContent = nutrient.description;
} else if (illness === "eyes") {
  const nutrient = nutrient_data.blood_circulation.omega3;
  document.getElementById('illness-value').textContent = nutrient.name;
  document.getElementById('content-desc').textContent = nutrient.description;
  document.querySelector('.icon-heart + p').textContent = '혈액순환';
  const recommendedPercent = 67.32;
  document.querySelector('.header p').textContent = `* Recommended for ${recommendedPercent}% of men in their early 30s.`;
  const imageLink = document.querySelector('#result li a');
  imageLink.href = nutrient.link;
  imageLink.querySelector('img').src = nutrient.image;
  document.querySelector('.rating .progress').setAttribute('data', '4.0');
  document.querySelector('.rating .value').textContent = '4.0';
}

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
