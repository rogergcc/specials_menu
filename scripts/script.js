var app = new Vue({
    el: '#app',
    mounted() {
        let vm = this
        axios
            .get(
                // 'https://sheets.googleapis.com/v4/spreadsheets/1zIVCVA0Tk5CvAiTyeAdDBPygT3aKDiSeM2FbPU0JO2c/values/Specials!A2:C20?key=AIzaSyBhiqVypmyLHYPmqZYtvdSvxEopcLZBdYU'
                'https://script.google.com/macros/s/AKfycby01lKNm94FHYORH3_c-lHK35r4zOoZiF8_tOD-QhfujBglDiE/exec?action=getItems'
            )
            .then(function (response) {
                // let specials = response.data.values
                // console.log('----------');
                
                // console.table(specials);

                // console.log('----------');
                // for (let index = 0; index < specials.length; index++) {
                //     const element = specials[index]
                //     let mitem = {
                //         name: element[0],
                //         description: element[1],
                //         price: element[2]
                //     }
                //     if (vm.isEven(index)) {
                //         vm.menuItems_L = vm.menuItems_L.concat(mitem)
                //     } else {
                //         vm.menuItems_R = vm.menuItems_R.concat(mitem)
                //     }
                // }

                let specials = response.data.items
                console.log('----------');
                
                console.table(specials);

                console.log('----------');
                for (let i = 0; i < specials.length; i++) {
                    // const element = specials[i]
                    let mitem = {
                        name: specials[i].Title,
                        description: specials[i].Description,
                        price: specials[i].Price
                    }
                    if (vm.isEven(i)) {
                        vm.menuItems_L = vm.menuItems_L.concat(mitem)
                    } else {
                        vm.menuItems_R = vm.menuItems_R.concat(mitem)
                    }
                }

                console.log(response)
            })
    },
    data: {
        menuItems_L: [],
        menuItems_R: [],
        // menuStyle: {
        //     background: '#ffe6d1',
        //     color: '#000'
        // },
        
    },
    computed: {},
    methods: {
        isEven: function (n) {
            return n % 2 == 0
        }
    }
});