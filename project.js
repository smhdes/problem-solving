//////////////////////////////////////////////////////////////////////////////////

const myNumberList = [-2,1,3,-4,5];

const newNumberList = []; // komsu olmayan degerlerin  toplamini tutan liste

/**
 *  parseInt(myNumberList[i]) + parseInt(myNumberList[i+j]);
 * veya parseInt(myNumberList[i] + myNumberList[i+j]);
 * seklinde kontrol de koyularak int olmamasi durumu ortadan kaldirilabilir.
 */

for(i=0; i< myNumberList.length; i++){
    let total = 0;
    for(j=2; j<myNumberList.length; j++){
        // dizi boyutunundan buyuk degilse isleme devam et
        if(i+j<myNumberList.length){
            total += myNumberList[i]+  myNumberList[i+j];
            newNumberList.push(myNumberList[i]+  myNumberList[i+j]);   // komsu olmayan degerlerin toplamini yeni listeye ekliyoruz
            console.log(myNumberList[i]+  myNumberList[i+j]);
        }
    }

}

/**
 * sort fonksiyonu yerine dizinin ilk elemanin en buyuk deger kabul edip diger butun dizi elemanlarini
 *  tek tek bu eleman ile karsilastirir ve  buyuk olani seceriz ve diger elemanlar icinde ayni islem tekrarlanir
 */

let maxValue = newNumberList[0];  // dizinin ilk elemanini en buyuk sayi kabul ettik

for(k=0; k<newNumberList.length; k++){
        for(j=1; j<newNumberList.length; j++){
            if(newNumberList[k]> newNumberList[j]){
                // eger sa
                maxValue = newNumberList[k];
            }
            else{
                maxValue = newNumberList[j];
                k = j;
            }

        }
}
/////////////////////////////////////////////////////////////////////
console.log('max value: ', maxValue);
// sort fonksiyonu ile buyukten kucuge siralayip dizinin en son yani en buyuk elemanini aliriz.
console.log('new Array: ', newNumberList.sort()[myNumberList.length]); 
////////////////////////////////////////////////////////////////////

let x=4;
let totalEk = 0;
for(i=0; i<100; i++){

    if(i%x === 0){
        totalEk += i;
        console.log(`${i} sayisi ${x} e bolunur toplam : ${totalEk}`);

    }
}

for(i=a; i<b; i++){

    if(i%x === 0){
        totalEk += i;
    }
}
/////////////////////////////////////////////////////