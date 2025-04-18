# BANK_MANAGEMENT
THIS IS THE BANK SYSTEM LIKE ACCOUNT CREATION , DEPOSIT , WITHDRAW , TRANSFER FUNDS , ACCOUNT DETAILS AND DELETION OF ACCOUNT.

FRONTEND ( HTML , CSS , JS) ) :
1. HTML CODE :
   
   <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Bank Management System</title> 
</head>

<body>
    <img src="image/b3.jpg" alt="" width="100%" height="100%">
    <div class="container">
        <h1>Bank Management System</h1>
        <div class="box">
            <div class="box1">
                <div class="boxes">
                    <form id="bankForm">
                        <input type="text" id="accountNumber" placeholder="Account Number" required>
                        <input type="text" id="accountHolder" placeholder="Account Holder" required>
                        <input type="number" id="balance" placeholder="Initial Balance" required>
                        <div class="btn">
                            <button type="submit">Create Account</button>
                        </div>
                    </form>
                </div>

                <div class="boxes">
                    <form id="depositForm">
                        <div>
                            <input type="text" id="depositAccount" placeholder="Account Number" required>
                            <input type="number" id="depositAmount" placeholder="Amount to Deposit" required>
                        </div>
                        <div class="btn">
                            <button type="submit">Deposit</button>
                        </div>
                    </form>
                </div>

                <div class="boxes">
                    <form id="withdrawForm">
                        <div>
                            <input type="text" id="withdrawAccount" placeholder="Account Number" required>
                            <input type="number" id="withdrawAmount" placeholder="Amount to Withdraw" required>
                        </div>
                        <div class="btn">
                            <button type="submit">Withdraw</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="box2">
                <div class="boxes">
                    <form id="transferForm">
                        <input type="text" id="fromAccount" placeholder="From Account Number" required>
                        <input type="text" id="toAccount" placeholder="To Account Number" required>
                        <input type="number" id="transferAmount" placeholder="Amount to Transfer" required>
                        <div class="btn">
                            <button type="submit">Transfer</button>
                        </div>
                    </form>
                </div>

                <div class="boxes">
                    <form id="viewForm">
                        <input type="text" id="viewAccount" placeholder="Account Number" required>
                        <div class="btn">
                            <button type="submit">View Account</button>
                        </div>
                    </form>
                </div>

                <div class="boxes">
                    <form id="deleteForm">
                        <input type="text" id="deleteAccount" placeholder="Account Number" required>
                        <div class="btn">
                            <button type="submit">Delete Account</button>
                        </div>
                    </form>
                </div>
                <div id="message"></div>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
