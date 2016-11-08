/**
 * Created by user on 06.11.2016.
 */
/*
* �������� ������� compareObjects, ������� ���������
* 2 ������� � �������� ��������� ��������, �� �������� ����� ��������� ��������� ��������, � ������� � ������� �������� name ���� �������,  � �������� �������� ����������� �������� ������.
* �������� ���� ������ � ������� ��������, ������ ����� �����������.
* �������� ���������� ������� � ��������� ��� ��������� ������� � �������� ��� ���������
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
* ������� ����������� �������� (�����) Calculator � ����� ��������: add - ��������� ����� � ���������� ��� � �����������,
* getCurrentSum - ��������� ������ � ���������� �������������� ����� �� ���� ��������� � ������� (���� ������� ���, ���������� ������� �����)
 �������� ��� ���������� ������ Calculator
 �������� � ������ ������ ����� 3,8,11 � �� ������ 5,12,17.
 �������� � ������� �����:
 ���� ����� ���� ��������, ��������� (56)
 ����� ����� ���� �������� �� ������ ���� (28)
 ��� ������ ������� ����� ����� �������� ���� � ����� �������������� ����� (������ ���������)*/

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
* �������� ��������� �� 5 ����������� �����, ��� ������ ����� �������� ��������� ����������:
 * played - ���������� ��� ����� ���� ��������� (���������� ��������� �������),
 * name - ��� �����
 �������� ������� favoriteSong, ������� ��������� ��������� �� �����, � ���������� ��������� ����������: �������� �����, ������� ��� ����� ���� ���������, ������ ����� � ���������.
 �������� ������� favoriteSong � ��������� �� ��������� ���������*/

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