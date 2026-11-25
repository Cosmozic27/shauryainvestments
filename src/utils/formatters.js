/**
 * Indian currency and numerical formatting utilities
 */

export function formatINR(value, options = {}) {
  const num = Number(value);
  if (isNaN(num)) return '₹0';
  
  const maximumFractionDigits = options.maximumFractionDigits ?? 0;
  const minimumFractionDigits = options.minimumFractionDigits ?? 0;

  return '₹' + num.toLocaleString('en-IN', {
    maximumFractionDigits,
    minimumFractionDigits
  });
}

export function formatCompactINR(value) {
  const num = Number(value);
  if (isNaN(num)) return '₹0';
  if (num >= 10000000) {
    return '₹' + (num / 10000000).toFixed(2).replace(/\.00$/, '') + ' Cr';
  }
  if (num >= 100000) {
    return '₹' + (num / 100000).toFixed(2).replace(/\.00$/, '') + ' L';
  }
  if (num >= 1000) {
    return '₹' + (num / 1000).toFixed(1).replace(/\.0$/, '') + ' k';
  }
  return '₹' + num.toLocaleString('en-IN');
}
