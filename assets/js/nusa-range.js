export function initRange() {
    const ranges = document.querySelectorAll('.nusa-form-range, .ns-form-range');
    
    const updateRange = (range) => {
        const min = parseFloat(range.min) || 0;
        const max = parseFloat(range.max) || 100;
        const val = parseFloat(range.value);
        const percentage = ((val - min) * 100) / (max - min);
        
        range.style.backgroundSize = `${percentage}% 0.5rem, 100% 0.5rem`;
    };

    ranges.forEach(range => {
        updateRange(range);
        range.addEventListener('input', () => updateRange(range));
        range.addEventListener('change', () => updateRange(range));
    });
}