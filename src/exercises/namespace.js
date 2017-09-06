export var MyNameSpace;
(function (MyNameSpace) {
    MyNameSpace.greeting = 'Esto es una constante';
    class MyNumberClass {
        returnNum(myNum) {
            return myNum;
        }
    }
    MyNameSpace.MyNumberClass = MyNumberClass;
})(MyNameSpace || (MyNameSpace = {}));
