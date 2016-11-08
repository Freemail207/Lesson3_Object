/**
 * Created by user on 06.11.2016.
 */
/*
* Напишите функцию compareObjects, которая принимает
* 2 объекта и название числового свойства, по которому нужно выполнить сравнение объектов, и выводит в консоль свойство name того объекта,  у которого значение переданного свойства больше.
* Создайте один объект с помощью литерала, второй через конструктор.
* Вызовите написанную функцию и передайте два созданных объекта и свойство для сравнения
*/
function compareObjects(obj1, obj2, name){
    var keyObj1=obj1[name];
    var keyObj2=obj2[name];
    if(!isFinite(keyObj1)||!isFinite(keyObj1)){
        console.log("Sorry, property is not correct");
        return;
    }
    if (keyObj1>keyObj2){
        console.log(name+":"+keyObj1);
        return;
    }
    if(keyObj1<keyObj2){
        console.log(name+":"+keyObj2);
        return;
    }
    if(keyObj1===keyObj2){
        console.log("Propertys is equal")
    }
}
function Constructor(number,position, age){
    this.number = number;
    this.position = position;
    this.age = age;
}
var firstStudent = new Constructor(12,3,22);
var secondStudent={
    number:10,
    position:8,
    age:22
}
compareObjects(firstStudent,secondStudent,"number");
/*
* Опишите конструктор объектов (класс) Calculator с двумя методами: add - принимает число и прибавляет его к предыдущему,
* getCurrentSum - принимает индекс и возвращает результирующее число на шаге указынном в индексе (если индекса нет, возвращает текущую сумму)
 Создайте два экземпляра класса Calculator
 Добавьте в первый объект числа 3,8,11 и во второй 5,12,17.
 Выведите в консоль сумму:
 всех чисел всех объектов, убедитесь (56)
 сумму чисел всех объектов на втором шаге (28)
 для одного объекта сумму после третьего шага и общую результирующую сумму (должна совпадать)*/

function Calculator(){
    var sum=0;
    var saveSum=[];
    return{
        add:function(a){
            sum=sum+a;
            saveSum.push(sum);
            return sum;
        },
        getCurrentSum: function(index){
            if(index){
                return saveSum[index-1];
            }
            else{
                return saveSum[saveSum.length-1];
            }
        }
    }
}
var a1 = new Calculator();
a1.add(3);
a1.add(8);
var a2 = new Calculator();
a2.add(5);
a2.add(12);
console.log(a2.add(17)+a1.add(11));
console.log(a2.getCurrentSum(2)+a1.getCurrentSum(2));
console.log(a2.getCurrentSum(3)===a2.getCurrentSum());
/*
* Создайте коллекцию из 5 музыкальных песен, где каждая песня содержит следующую информацию:
 * played - количество раз песня была проиграна (определить случайным образом),
 * name - имя песни
 Напишите функцию favoriteSong, которая принимает коллекцию из песен, и возвращает следующую информацию: название песни, сколько раз песня была проиграна, индекс песни в коллекции.
 Вызовите функцию favoriteSong и передайте ей созданную коллекцию*/

var collection = [
    {
    name:"House of Rising Sun",
    played:Math.round(Math.random() * 30)
    },
    {
        name:"A New Day Arises ",
        played:Math.round(Math.random() * 30)
    },
    {
        name:"Nightfall",
        played:Math.round(Math.random() * 30)
    },
    {
        name:"Primo Victoria",
        played:Math.round(Math.random() * 30 )
    },
    {
        name:"Last Night of the Kings",
        played:Math.round(Math.random() * 30)
    }]

function favoriteSong(collection){
    var index=0;
    var max=0;
    for(var i=0; i<collection.length; i++){
        if(collection[i].played>max){
            max=collection[i].played;
            index=i;
        }
    }
    return{
        name:collection[index].name,
        played:collection[index].played,
        index:index
    }
}
console.log(favoriteSong(collection));

//DEEP COPY
var obj={
    firstParam:{
        first:{
            second:12
        },
        name:"Object",
        array:[10,20,{key:2}],
        Foo:function(){
            var a=0;
            a++;
        }

    },
    secondParam:{
        first:13
    },
    thirdParam:14
}
var target={};

function deepCopy(target,source){
    var t=target;
    var localTarget;
    var localSource;
    for(key in source){
        var k=key.toString();
        if(typeof source[k]==='object'){
            t[k]={};
            localTarget=t[k];
            localSource=source[k];
            deepCopy(localTarget,localSource);
        }
        else{
            t[k]=source[k];
        }
    }
}
deepCopy(target,obj);
console.log(target);
target.firstParam.first.second=1000;
target.firstParam.array[2].key=1000;
target.firstParam.Foo=function(){
    var notA;
    notA++;
}
console.log(obj);