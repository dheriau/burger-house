// Vue.js uygulamasını oluştur
const { createApp } = Vue

createApp({
    // Uygulama verileri
    data() {
        return {
            // Modal durumları
            isCartOpen: false,        // Sepet modalının görünürlüğü
            showLoginModal: false,    // Giriş modalının görünürlüğü
            showRegisterModal: false, // Kayıt modalının görünürlüğü
            
            // Giriş formu verileri
            loginForm: {
                email: '',
                password: ''
            },
            
            // Kayıt formu verileri
            registerForm: {
                name: '',
                email: '',
                password: '',
                passwordConfirm: ''
            },
            
            // Burger menüsü - Statik veri
            burgers: [
                {
                    id: 1,
                    name: 'Klasik Burger',
                    description: 'Özel sosumuz ve taze malzemelerle hazırlanan klasik burgerimiz',
                    price: 75,
                    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    ingredients: ['Dana eti', 'Marul', 'Domates', 'Soğan', 'Özel sos'],
                    calories: 650,
                    spicy: false
                },
                {
                    id: 2,
                    name: 'Cheese Burger',
                    description: 'Bol peynirli ve özel soslu cheese burger',
                    price: 85,
                    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    ingredients: ['Dana eti', 'Cheddar peyniri', 'Marul', 'Domates', 'Soğan'],
                    calories: 750,
                    spicy: false
                },
                {
                    id: 3,
                    name: 'Bacon Burger',
                    description: 'Çıtır çıtır pastırma ve erimiş peynirle hazırlanan burger',
                    price: 95,
                    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    ingredients: ['Dana eti', 'Pastırma', 'Cheddar peyniri', 'Marul', 'Domates'],
                    calories: 850,
                    spicy: false
                },
                {
                    id: 4,
                    name: 'Mega Burger',
                    description: 'Çift kat et, çift kat peynir ve özel soslu mega burger',
                    price: 120,
                    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    ingredients: ['Çift kat dana eti', 'Çift kat peynir', 'Marul', 'Domates', 'Soğan'],
                    calories: 1000,
                    spicy: false
                },
                {
                    id: 5,
                    name: 'BBQ Burger',
                    description: 'BBQ sosu ve soğan halkalarıyla hazırlanan özel burger',
                    price: 90,
                    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    ingredients: ['Dana eti', 'BBQ sos', 'Soğan halkaları', 'Marul', 'Domates'],
                    calories: 800,
                    spicy: false
                },
                {
                    id: 6,
                    name: 'Mantarlı Burger',
                    description: 'Mantarlı sos ve erimiş peynirle hazırlanan burger',
                    price: 95,
                    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    ingredients: ['Dana eti', 'Mantarlı sos', 'Cheddar peyniri', 'Marul', 'Domates'],
                    calories: 750,
                    spicy: false
                },
                {
                    id: 7,
                    name: 'Tavuk Burger',
                    description: 'Çıtır tavuk ve özel sosla hazırlanan burger',
                    price: 80,
                    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    ingredients: ['Çıtır tavuk', 'Marul', 'Domates', 'Soğan', 'Özel sos'],
                    calories: 600,
                    spicy: false
                },
                {
                    id: 8,
                    name: 'Balık Burger',
                    description: 'Çıtır balık ve özel sosla hazırlanan burger',
                    price: 85,
                    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    ingredients: ['Çıtır balık', 'Marul', 'Domates', 'Soğan', 'Özel sos'],
                    calories: 550,
                    spicy: false
                },
                {
                    id: 9,
                    name: 'Mega Spicy Burger',
                    description: 'Acılı sos ve jalapeno biberiyle hazırlanan mega burger',
                    price: 130,
                    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    ingredients: ['Çift kat dana eti', 'Acılı sos', 'Jalapeno biberi', 'Marul', 'Domates'],
                    calories: 950,
                    spicy: true
                },
                {
                    id: 10,
                    name: 'Truf Mantarlı Burger',
                    description: 'Truf mantarı ve özel sosla hazırlanan lüks burger',
                    price: 150,
                    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    ingredients: ['Dana eti', 'Truf mantarı', 'Cheddar peyniri', 'Marul', 'Domates'],
                    calories: 800,
                    spicy: false
                }
            ],
            
            // Sepet - Kullanıcının seçtiği ürünler
            cart: []
        }
    },
    
    // Hesaplanmış özellikler
    computed: {
        // Sepetteki ürünlerin toplam fiyatını hesapla
        totalPrice() {
            return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
        }
    },
    
    // Metodlar
    methods: {
        // Sepet modalını aç/kapat
        toggleCart() {
            this.isCartOpen = !this.isCartOpen
        },
        
        // Sepete ürün ekleme
        addToCart(burger) {
            // Ürün sepette var mı kontrol et
            const existingItem = this.cart.find(item => item.id === burger.id)
            if (existingItem) {
                // Varsa miktarını artır
                existingItem.quantity++
            } else {
                // Yoksa yeni ürün olarak ekle
                this.cart.push({
                    ...burger,
                    quantity: 1
                })
            }
            // Sepet modalını aç
            this.isCartOpen = true
        },
        
        // Sepetten ürün çıkarma
        removeFromCart(item) {
            const index = this.cart.findIndex(cartItem => cartItem.id === item.id)
            if (index > -1) {
                this.cart.splice(index, 1)
            }
        },
        
        // Ürün miktarını artırma
        increaseQuantity(item) {
            item.quantity++
        },
        
        // Ürün miktarını azaltma
        decreaseQuantity(item) {
            if (item.quantity > 1) {
                item.quantity--
            } else {
                // Miktar 1'den küçükse ürünü sepetten çıkar
                this.removeFromCart(item)
            }
        },
        
        // Menü bölümüne kaydırma
        scrollToMenu() {
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })
        },
        
        // Sipariş tamamlama
        checkout() {
            // Sepet boş mu kontrol et
            if (this.cart.length === 0) {
                alert('Sepetiniz boş!')
                return
            }
            
            // Başarılı sipariş
            alert('Siparişiniz alındı! Toplam: ' + this.totalPrice + ' ₺')
            this.cart = []
            this.isCartOpen = false
        },
        
        // Giriş işlemi
        login() {
            // Başarılı giriş simülasyonu
            console.log('Login başarılı:', this.loginForm)
            this.showLoginModal = false
            this.loginForm = {
                email: '',
                password: ''
            }
        },
        
        // Kayıt işlemi
        register() {
            // Şifreler eşleşiyor mu kontrol et
            if (this.registerForm.password !== this.registerForm.passwordConfirm) {
                alert('Şifreler eşleşmiyor!')
                return
            }
            
            // Başarılı kayıt simülasyonu
            console.log('Kayıt başarılı:', this.registerForm)
            this.showRegisterModal = false
            this.registerForm = {
                name: '',
                email: '',
                password: '',
                passwordConfirm: ''
            }
        }
    }
}).mount('#app')