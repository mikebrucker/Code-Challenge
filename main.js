// 1

function stringy(size) {
    var str = '';
    if (size.length > 0) {
        str += '1';
    }
    if (size.length > 1) {
        str += '0';
    }
    for(var i = 2; i < size.length; i++) {
        if (i % 2 == 1) {
            str += '0';
        } else {
            str += '1';
        }
    }
    return str;
}

// 2

function reverse(number) {
    var reversed = []
        var newNum = number.toString().split('').reverse();
    for (let num of newNum) {
        reversed.push(Number(num));
    }
    return reversed;
}

// 3

function fibonacci() {
    var array = [];
    var first = 0;
    var second = 1;
    for (var i = 0; i < 20; i++) {
        array.push(first);
        second += first;
        first = second - first;
    }
    return array;
}

// 4

function checkCoupon(couponDate) {
    var date = new Date();
    var month = ['january','february','march','april','may','june','july','august','september','october','november','december'];
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var coupon = couponDate.toLowerCase().split(' ');
    for (var i = 0; i < coupon.length; i++) {
        coupon[i] = coupon[i].split('');
    if (coupon[i][coupon[i].length-1] == ',') {
        coupon[i].pop();
    }
    coupon[i] = coupon[i].join('');
    }
    coupon[1] = Number(coupon[1]);
    coupon[2] = Number(coupon[2]);
    for(var i = 0; i < month.length; i++) {
        if (coupon[0] == month[i]) {
            coupon[0] = month.indexOf(month[i]);
        }
    }
    if (coupon[2] < y) {
    return false;
    } else if ((coupon[0] < m) && (coupon[2] == y)) {
    return false;
    } else if ((coupon[1] < d) && (coupon[0] == m) && (coupon[2] == y)) {
    return false;
    } else {
    return true;
    }
}

// 5

function checkEmail(mail) {
    var atCount = 0;  
    var chars = [['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],['1','2','3','4','5','6','7','8','9','0','_'],['.','-']];
    var email = mail.toLowerCase();
    if (!email.includes('@') || !chars[0].includes(email.charAt(0))) {
        return false;
    } else {
        for (var i = 0; i<email.length; i++) {
            if (email.charAt(i) == '@') {
            atCount++;
            }
        }
        if (atCount > 1) {
            return false;
        }
    }
    var emailArray = email.split('@');
    for (var i = 0; i < emailArray[0].length; i++) {
        if (!chars[0].includes(emailArray[0][i]) && !chars[1].includes(emailArray[0][i])) {
        return false;
        }
    }
    for (var i = 0; i < emailArray[1].length; i++) {
        if (!chars[0].includes(emailArray[1][i]) && !chars[1].includes(emailArray[1][i]) && !chars[2].includes(emailArray[1][i]) || emailArray[1].charAt(emailArray[1].length-1) == '.'){
        return false;
        }
    }
    return true;
}