const baseUrl = "https://milestone0-api.ftgohacktiv8.my.id"

const footer = document.getElementById('footer')
const app = document.getElementById('app')

function loadUser() {
    const isUser = localStorage.getItem('milestone0_user')
    if (!isUser) return
    return JSON.parse(isUser)
}

async function renderFooter() {
    const response = await fetch('../components/footer.html')
    const data = await response.text()
    footer.innerHTML = data
}

async function fetchUserData(userId) {
    try {
        const response = await fetch(baseUrl + '/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid: userId
            }),
            credentials: 'include'
        })
        if (!response.ok) {
            throw new Error(`HTTP error with status: ${response.status}`);
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function handleLogin(inputEmail, inputPassword) {
    try {
        const response = await fetch(baseUrl + '/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: inputEmail,
                password: inputPassword,
            }),
            credentials: 'include'
        })
        if (!response.ok) {
            throw new Error(`HTTP error with status: ${response.status}`);
        }
        const data = await response.json()
        return data
    } catch(error) {
        console.error('Error fetching data:', error);
    }
}

async function handleRegister(inputEmail, inputPassword) {
    try {
        const response = await fetch(baseUrl + '/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: inputEmail,
                password: inputPassword,
            }),
            credentials: 'include'
        })
        if (!response.ok) {
            throw new Error(`HTTP error with status: ${response.status}`);
        }
        const data = await response.json()
        return data
    } catch(error) {
        console.error('Error fetching data:', error);
    }
}

function genRandomString(length) {
    const chars = "abcdefghiklmnopqrstuvwxyz0123456789"
    let string = ''
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * chars.length)
        string += chars[random]
    }
    return string
}