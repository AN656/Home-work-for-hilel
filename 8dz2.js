array1 = [1,123,567,'lol'];
array1.push('lmao');
array1.unshift('lmao');
array1.pop('lmao');
array1.shift('lmao');
console.log(array1);
function num_to_month(num) 
{
    switch(num)
    {
        case 1:
            return 'January';
            break;
        case 2:
            return 'February';
            break;
        case 3:
            return 'March';
            break;
        case 4:
            return 'April';
            break;
        case 5:
            return 'May';
            break;
        case 6:
            return 'June';
            break;
        case 7:
            return 'July';
            break;
        case 8:
            return 'August';
            break;
        case 9:
            return 'September';
            break;
        case 10:
            return 'October';
            break;
        case 11:
            return 'November';
            break;
        case 12:
            return 'December';
            break;                                                               
    }
}
item1 = [10,'ifone0',5];
item2 = [13, 'semseng',5];
item3 = [8, 'nukio',5];
console.log(item1[0]+item2[0]+item3[0], item1[item1.length - 1]);



array2 = [1,2,3];
console.log(array2.reverse());

