    function findMissing(arr){
        let N =arr.length;
        let a=0;
        let b=0;
        for (i = 0; i <= N; i++) {
                a+=i;
            }
        
            for (i = 0; i < N; i++) {
                b+=arr[i];
            }
        
            let ans = a-b;
            
            console.log(ans);
    }

    arr =  [0,1];
    findMissing(arr);
    