// >>>>[ Nomor 1 ]<<<<
function isArithmeticProgression(numbers){
  selisih = numbers[1] - numbers[0]

  for(i=2; i<numbers.length; i++){
    if(numbers[i] - numbers[i-1] != selisih) return false
  }

  return true
}

// Test case
console.log(">>>> Test Case No. 1 Deret Aritmatika <<<<");
console.log("[1, 2, 3, 4, 5, 6] =>> ",isArithmeticProgression([1, 2, 3, 4, 5, 6]));
console.log("[2, 4, 6, 12, 24] =>> ",isArithmeticProgression([2, 4, 6, 12, 24]));
console.log("[2, 4, 6, 8] =>> ",isArithmeticProgression([2, 4, 6, 8]));
console.log("[2, 6, 18, 54] =>> ",isArithmeticProgression([2, 6, 18, 54]));
console.log("[1, 2, 3, 4, 7, 9] =>>",isArithmeticProgression([1, 2, 3, 4, 7, 9]));


// >>>>[ Nomor 2 ]<<<<
function threeStepAB(text){
  text = text.toLowerCase().split("")

  for(i=4; i<text.length; i++){
    if((text[i-4] === "a" && text[i] === "b") || (text[i-4] === "b" && text[i] === "a")) return true
  }

  return false
}

// Test case
console.log("\n>>>> Test Case No. 2 Three Step AB <<<<");
console.log("lane borrowed =>>",threeStepAB("lane borrowed"));
console.log("i am sick =>>",threeStepAB("i am sick"));
console.log("you are boring =>>",threeStepAB("you are boring"));
console.log("barbarian =>>",threeStepAB("barbarian"));
console.log("bacon and meat =>>",threeStepAB("bacon and meat"));


// >>>>[ Nomor 3 ]<<<<
function sumArray(arr, int){
  hasilSum = []

  for(i=0; i<arr.length; i++){
    for(j=i+1; j<arr.length; j++){
      if(arr[i] + arr[j] === int) hasilSum.push([arr[i],arr[j]])
    }
  }
  
  if(hasilSum[0] == null) console.log("Tidak ada hasil yang cocok");
  else console.log(hasilSum);
}

// Test Case
console.log("\n>>>> Test Case No. 3 Sum Array <<<<");
console.log("sumArray([2, 1, 3, 4],5) adalah : ",);
sumArray([2, 1, 3, 4],5)
console.log("sumArray([1, 8, 10, 3],11) adalah : ");
sumArray([1, 8, 10, 3],11)


// >>>>[ Nomor 4 ]<<<<
function arrSum(arr) {
  let totalJumlah = arr[0], jumlahSekarang = arr[0];
  let indexAwal = 0, indexAkhir = 0, tempIndexAwal = 0;

  for (i=1; i < arr.length; i++) {
    if (arr[i] > jumlahSekarang + arr[i]) {
      [jumlahSekarang, tempIndexAwal] = [arr[i], i]
    } else jumlahSekarang += arr[i];

    if (jumlahSekarang > totalJumlah) {
      [indexAwal, indexAkhir, totalJumlah] = [tempIndexAwal, i, jumlahSekarang];
    }
  }

  return console.log([arr.slice(indexAwal, indexAkhir+1), totalJumlah]); 
}

// Test Case
console.log("\n>>>> Test Case No. 4 Sum Sub-Array <<<<");
console.log("arrSum([-2, -3, 4, -1, -2, 1, 5, -3]) adalah : ");
arrSum([-2, -3, 4, -1, -2, 1, 5, -3]);




