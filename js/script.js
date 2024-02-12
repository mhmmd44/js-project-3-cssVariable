// const inputs = document.querySelectorAll('.controls input');
  
// function handleUpdate() {
//   const suffix = this.dataset.sizing || '';
// //   console.log('suffix',suffix);
//   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
// }

// inputs.forEach(input => input.addEventListener('change', handleUpdate));
// // console.log('inputs1',inputs);
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
// // console.log('inputs2',inputs)


//deneme----------------

// HTML'deki elementleri seç
const fontSizeInput = document.getElementById('fontsize');
const spacingInput = document.getElementById('spacing');
const blurInput = document.getElementById('blur');
const baseInput = document.getElementById('base');
const image = document.querySelector('img');
const h2Title = document.querySelector('h2');
const highlightedElements = document.querySelectorAll('.hl');

// CSS değişkenlerini tanımla
const root = document.documentElement;

// Olay dinleyicilerini ekle
fontSizeInput.addEventListener('input', updateFontSize);
spacingInput.addEventListener('input', updateSpacing);
blurInput.addEventListener('input', updateBlur);
baseInput.addEventListener('input', updateBaseColor);

// Font Size değerini güncelle
function updateFontSize() {
    const fontSizeValue = fontSizeInput.value;
    root.style.setProperty('--font-size', `${fontSizeValue}px`);

    // h2 başlığının font büyüklüğünü değiştir
    h2Title.style.fontSize = `${fontSizeValue}px`;
}

// Spacing değerini güncelle
function updateSpacing() {
    const spacingValue = spacingInput.value;
    root.style.setProperty('--spacing', `${spacingValue}px`);
}

// Blur değerini güncelle
function updateBlur() {
    const blurValue = blurInput.value;
    root.style.setProperty('--blur', `${blurValue}px`);
}

// Base color değerini güncelle
function updateBaseColor() {
    const baseColorValue = baseInput.value;

    // 'hl' sınıfına sahip elemanların rengini güncelle
    highlightedElements.forEach(element => {
        element.style.color = baseColorValue;
    });

    // h2 başlığının rengini default bırak
    h2Title.style.color = '';
}



// Örnek resmi güncelle
function updateImage() {
    // Resmi güncellemek için istediğiniz işlemleri buraya ekleyebilirsiniz.
}

// Olay dinleyicisini image elementine ekle (istediğiniz bir olaya göre)
image.addEventListener('click', updateImage);