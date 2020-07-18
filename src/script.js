var app = new Vue({
    el: '#app',
    mounted() {
        let vm = this
        axios
            .get(
                'https://sheets.googleapis.com/v4/spreadsheets/1zIVCVA0Tk5CvAiTyeAdDBPygT3aKDiSeM2FbPU0JO2c/values/Specials!A2:C20?key=AIzaSyBhiqVypmyLHYPmqZYtvdSvxEopcLZBdYU'
            )
            .then(function (response) {
                let specials = response.data.values
                for (let index = 0; index < specials.length; index++) {
                    const element = specials[index]
                    let mitem = {
                        name: element[0],
                        description: element[1],
                        price: element[2]
                    }
                    if (vm.isEven(index)) {
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
        menuStyle: {
            background: '#ffe6d1',
            color: '#000'
        },
        dotStyle: {
            backgroundImage: 'radial-gradient(' + this.color + ' 1px, transparent 0px)'
        }
    },
    computed: {},
    methods: {
        isEven: function (n) {
            return n % 2 == 0
        }
    }
});

