1 . JS CODE :

const accounts = {};

document.getElementById('bankForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const accountNumber = document.getElementById('accountNumber').value;
    const accountHolder = document.getElementById('accountHolder').value;
    const balance = parseFloat(document.getElementById('balance').value);

    accounts[accountNumber] = { accountHolder, balance }; // Store account details
    document.getElementById('message').innerText = `Account created for ${accountHolder} with balance ${balance}`;
});

document.getElementById('depositForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const accountNumber = document.getElementById('depositAccount').value;
    const amount = parseFloat(document.getElementById('depositAmount').value);
    
    if (accounts[accountNumber]) {
        accounts[accountNumber].balance += amount;
        document.getElementById('message').innerText = `Deposited ${amount} to account ${accountNumber}`;
    } else {
        document.getElementById('message').innerText = `Account ${accountNumber} not found!`;
    }
});

document.getElementById('withdrawForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const accountNumber = document.getElementById('withdrawAccount').value;
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    
    if (accounts[accountNumber]) {
        if (accounts[accountNumber].balance >= amount) {
            accounts[accountNumber].balance -= amount;
            document.getElementById('message').innerText = `Withdrew ${amount} from account ${accountNumber}`;
        } else {
            document.getElementById('message').innerText = `Insufficient funds in account ${accountNumber}!`;
        }
    } else {
        document.getElementById('message').innerText = `Account ${accountNumber} not found!`;
    }
});

document.getElementById('transferForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fromAccount = document.getElementById('fromAccount').value;
    const toAccount = document.getElementById('toAccount').value;
    const amount = parseFloat(document.getElementById('transferAmount').value);
    
    if (accounts[fromAccount] && accounts[toAccount]) {
        if (accounts[fromAccount].balance >= amount) {
            accounts[fromAccount].balance -= amount;
            accounts[toAccount].balance += amount;
            document.getElementById('message').innerText = `Transferred $${amount} from account ${fromAccount} to ${toAccount}`;
        } else {
            document.getElementById('message').innerText = `Insufficient funds in account ${fromAccount}!`;
        }
    } else {
        document.getElementById('message').innerText = `One or both accounts not found!`;
    }
});

document.getElementById('viewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const accountNumber = document.getElementById('viewAccount').value;

    if (accounts[accountNumber]) {
        const accountHolder = accounts[accountNumber].accountHolder;
        const balance = accounts[accountNumber].balance;
        document.getElementById('message').innerText = `Details for A/C ${accountNumber}\nA/C Holder Name: ${accountHolder}\nA/C Balance: ${balance}`;
    } else {
        document.getElementById('message').innerText = `Account ${accountNumber} not found!`;
    }
});

document.getElementById('deleteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const accountNumber = document.getElementById('deleteAccount').value;
    
    if (accounts[accountNumber]) {
        delete accounts[accountNumber];
        document.getElementById('message').innerText = ` Account ${accountNumber} has been deleted.`;
    } else {
        document.getElementById('message').innerText = `Account ${accountNumber} not found!`;
    }
});
