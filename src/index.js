
export  function unsortedBinarySearch(arr, x){
   
   let index;
   let rand = (arr.length -1) * (Math.random());
   rand = Math.round(rand);

        if(arr[rand]< x || arr[rand] > x){
            let larr = arr.slice(0, rand);
            let rarr = arr.slice(rand, arr.length -1);
            let lsize = larr.length;
            let rsize = rarr.length;
            if(rsize > lsize){
                //search right
                index =rand;
                rand = Math.random() * (rsize);
                rand = Math.round(rand);
                return logsearchrecur(arr, x, index, rand);
            }
            if(lsize > rsize){
                index = rand;
                rand = Math.random() * (lsize);
                rand = Math.round(rand);
                return logsearchrecur(arr, x, index, rand);
            }
            if(lsize = rsize){
                index = rand;
                rand = Math.round(Math.random());
                return logsearchrecur(arr, x, index, rand)
            }
        }
        if(arr[rand] === x){

            return rand;
        }
}

function logsearchrecur(arr, x, index, rand){

    if(arr[rand] < x || arr[rand] > x){
        let larr = arr.slice(0, rand);
        let rarr = arr.slice(rand, arr.length-1);
        let lsize = larr.length;
        let rsize = rarr.length;
        if(rsize > lsize){
            //search right
            index = rand;
            rand = Math.random() * (rsize);
            rand = index + Math.round(rand);
            return logsearchrecur(arr, x, index, rand);
        }
        if(lsize > rsize){
            index = rand;
            rand = Math.random() * (lsize);
            rand = index - Math.round(rand);
            return logsearchrecur(arr, x, index, rand);
        }
        if(lsize = rsize){
            index = rand;
            rand = Math.round(Math.random());
            return logsearchrecur(arr, x, index, rand)
        }
    }
    if(arr[rand] === x){

        return rand;
    }

}