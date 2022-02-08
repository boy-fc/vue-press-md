# TypeScript

### 安装

```js
//install
npm install -g typescript
//version
tsc -V 
```

### 基本类型

#### 数组类型

```tsx
方式一：
语法：let 变量名：数据类型[] = [值1，值2，值3] 
let arr1:number[] = [1,2,3]

方式二：泛型
语法：let 变量名：Array<数据类型> = [值1，值2，值3]
let arr2:Array<number> = [1,2,3]
```

#### 元祖类型

```tsx
元祖类型：在定义数组的时候，类型和数据的个数一开始就已经限定了
let arr3:[string, number, boolean] = ['你好啊'， 300，false]
```

#### 枚举类型

```tsx
枚举类型：枚举里面的每个数据值都可以叫元素，每个元素都有自己的编号，编号都是从0开始的，依次的递增加
enum Color {
	red,
	green,
	yellow
}
let color: Color = Color.red
```

#### any 类型

```tsx
any 类型: 当一个数组中要存储多个数据，个数不确定，类型不确定等等
let str: any = '100'
let str1: any[] = [100,'年少不知'， false]
```

#### void 类型

```tsx
void 类型：在函数声明的时候，小括号的后面使用：void，代表的是该函数没有任何的返回值   很少用
function showMsg(): void {
	console.log('很少用，作用不是很大')
}
```

#### object 类型

```tsx
object 类型
function getObj(obj: object): object {
    console.log(obj)
    return {
        name: '冯成'，
        age: 27
    }
}
```

#### 联合类型

```tsx
联合类型：表示取值可以为多种类型中的一种

需求1：定义一个函数得到一个数字或字符串值的字符串形式值
function getString(str: number | string): string {
	return str.toString()
}

类型断言：告诉编译器，我知道我自己是什么类型，也知道自己再干什么
类型断言的语法方式1：<类型> 变量名
类型断言的语法方式2：值 as 类型 如：(str as string).length

类型推断：没有明确的指定类型的时候推测出一个类

需求2：定义一个函数得到一个数字或字符串值的长度
function getStr(str: number | string): string {
    //return str.toString().length
    //如果str本身就是string类型，那么是没有必要调用toString()方法的
    
    if((<string>str).length) {
       // str.length存在吗？如果存在也就说明str是string类型的
       return (<string>str).length       
    }else{
       return str.toString().length   	              
    }
}
```

 ### 接口

#### interface 接口

接口是对象的状态（属性）和行为（方法）的抽象（描述）

接口：是一种类型，是一种规范，是一种规则，是一种能力，是一种约束

```tsx
// 定义一个对象，该对象的类型就是我定义的接口Person

//定义一个接口，该接口作为person对象的类型使用，限定或者是约束该对象中的属性数据
interface Person {
    // readonly 只读属性
    readonly id: number ,
    name: string,
    age: number,
    // ? 可选属性
    sex?: string
}

const person: Person = {
    id: 1,
    name: '小甜甜'，
    age: 18,
    sex: '男'
}
```

#### 函数类型

为了使用接口表示函数类型，我们需要给接口定义一个调用签名。

它就像是一个只有参数列表和返回值类型的函数定义。参数列表的每一个参数都需要名字和类型。

函数类型：通过接口的方式作为函数的类型来使用

```tsx
// 定义一个接口，用来作为某个函数的类型使用
interface ISearchFunc {
    // 定义一个调用签名
    (source: string, substring: string): boolean
}

// 定义一个函数，该类型就是上面定义的接口
const searchString: ISearchFunc = function (source: string, substring: string): boolean {
    return source,search(subString) > -1
}

console.log(searchString("haha,我又变帅了","帅"))
```

#### 类类型

类 类型：类的类型，可以通过接口来实现

```tsx
// 定义一个接口
interface IFly {
    // 该方法没有任何的实现（方法中什么都没有）
    fly()
}

// 定义一个类，这个类的类型就是上面定义的接口（实际上也可以理解为，IFly接口约束了当前的这个Person类）
class Person implements IFly {
    // 实现接口中的方法
    fly() {
        console.log("我会飞了，我是超人类")
	}
}

// 实例化对象
const person = new Person()
person.fly()

// 定义一个接口
interface ISwim {
    swim()
}

// 定义一个类，这个类的类型就是IFly和ISwim(当前的这个类可以实现多个接口，一个类同时也可以被多个接口进行约束)
class Person2 implements IFly,ISwim {
    fly() {
        console.log('我会飞了2')
	}
    swim() {
        console.log('我会游泳了啦2')
    }
}

// 实例化对象
const person2 = new Person2()
person2.fly()
person2.swim()

// 总结： 类可以通过接口的方式，来定义当前这个类的类型
// 类可以实现一个接口，类也可以实现多个接口，要注意，接口中的内容都要真正的实现


// 定义一个接口，继承其他的多个接口
interface IMyFlyAndSwim extends IFly, ISwim {}

// 定义一个类，直接实现IMyFlyAndSwim这个接口
class Person3 implements IMyFlyAndSwim {
    fly() {
        console.log('我飞了3')
	}
    swim() {
        console.log('我会游泳啦3')
    }
}

// 实例化对象
const person3 = new Person3()
person3.fly()
person3.swim()

// 总结：接口和接口之间的叫继承（使用的事extends关键字）
//      类和接口之间的叫实现（使用的事implements关键字）
```

### 类

#### 类

类：可以理解为模板，通过模板可以实例化对象

面向对象的编程语言

```tsx
// ts中类的定义及使用
class Person {
    // 定义属性
    name: string,
    age: number,
    gender: string,
    
    // 定义构造函数：为了将来实例化对象的时候，可以直接对属性的值进行初始化
    constructor(name: string = ’小甜甜‘, age: number = 16, gender: string = '女') {
        // 更新对象中的属性数据
        this.name = name
        this.age = age
        this.gender = gender
    }
    
    // 定义实例方法
    sayHi(str: string) {
        console.log(`大家好，我是${this.name},今年已经${this.age}岁了，是个${this.gender}孩子`， str)
    }
}

// ts中使用类，实例化对象，可以直接进行初始化操作
const person = new Person()
person.sayHi('你叫什么啊')

```

#### 继承

继承：类与类之间的关系

```html
继承后类与类之间的叫法：
	A类继承了B类，那么此时A类叫子类，B类叫基类
	子类 -----> 派生类
	基类 -----> 超类(父类)
	一旦发生了继承的关系，就出现了父子类的关系（叫法）
```

```tsx
// 定义一个类
class Person {
    // 定义属性
    name: string  //名字
    age: number  //年龄
    gender: string  //性别
    
    // 定义构造函数
    constructor(name: string = '小明', age: number = 18, gender: string = '女') {
        // 更新属性数据
        this.name = name 
        this.age = age 
        this.gender = gender
    }
    
    // 定义实例方法
    sayHi(str: string) {
        console.log(`大家好，我是${this.name},今年已经${this.age}岁了，是个${this.gender}孩子`， str)
    }
}

// 定义一个类，继承自Person
class Student extends Person {
    constructor(name: string, age: number, gender: string) {
        // 调用的事父类中的构造函数，使用的是super
        super(name, age, gender)
    }
    
    // 可以调用父类中的方法
    sayHi() {
        console.log('我是学生类中的sayHi方法')
        super.sayHi('哈哈哈')
	}
}

// 实例化Person
const person = new Person('大明明', 89, '男')
person.sayHi('嘎嘎')
const student = new Student('小甜甜'，16, '女')
student.sayHi()

// 总结： 类和类之间如果有继承关系，需要使用extends 关键字
//       子类中可以调用父类中的构造函数，使用的是super关键字（包括调用父类中的实例方法，也可以使用super）
// 		 子类中可以重写父类的方法
```

#### 多态

多态：父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为

```tsx
// 定义一个父类
class Animal {
    // 定义一个属性
    name: string
    
    // 定义一个构造函数
    constructor(name: string) {
        // 更新属性值
        this.name = name
    }
    
    // 实例方法
    run(distance: number = 0) {
        console.log(`跑了${distance}米这么远的距离`, this.name)
    }
}

// 定义一个子类
class Dog extends Animal {
    // 定义构造函数
    constructor(name: string) {
        // 调用父类的构造函数，实现子类中属性的初始化操作
        super(name)
    }
    
    // 实例化方法
    run(distance: number = 0) {
        console.log(`跑了${distance}米这么远的距离`, this.name)
    }
}

// 定义一个子类
class Pig extends Animal {
    // 定义构造函数
    constructor(name: string) {
        // 调用父类的构造函数，实现子类中属性的初始化操作
        super(name)
    }
    
    // 实例化方法
    run(distance: number = 0) {
        console.log(`跑了${distance}米这么远的距离`, this.name)
    }
}

// 实例化对象
const ani: Animal = new Animal('动物')
ani.run()
//实例化子类对象
const dog: Dog = new Dog('大黄')
dog.run()
// 实例化子类对象
const pig: Pig = new Pig('八戒')
pig.run()

// 父类和子类的关系：父子滚阿西，此时，父类类型创建子类的对象
const dog1: Animal = new Dog('小黄')
dog1.run()
const pig2: Animal = new Pig('小猪')
pig1.run()

//该函数需要的参数是Animaly 类型的
function showRun(ani: Animaly) {
    ani.run()
}
showRun(dog1)
showRun(pig1)
```

#### 类的修饰符

修饰符（类中的成员的修饰符）：主要是描述类中的成员（属性，构造函数，方法）的可访问性

类中的成员都有自己的默认的访问修饰符，public

**public** 修复符, 类中成员默认的修饰符，代表的事公共的，任何位置都可以访问类中的成员

**private **修饰符，类中的成员如果使用private来修饰，那么外部是无法访问这个成员数据的, 当然，子类中也是无法访问该成员数据的

**protected** 修饰符，类中的成员如果使用protected来修饰，那么外部是无法访问这个成员数据的，当然，在子类是可以访问该数据的

```tsx
// 定义一个类
class Person {
    // 属性
    private name：string
    
    // 构造函数
    public constructor(name：string) {
        // 更新属性
        this.name = name
    }
    
    // 方法
    public eat() {
        console.log('嗯，这个大骨头真好吃'，this.name)
    }
}

// 实例化对象
const per = new Person('大蛇丸')
// 类的外部可以访问类中的属性成员
console.log(per.name)
per.eat()
```

#### readonly 修饰符

**readonly** 修饰符：首先是一个关键字，对类中的属性成员进行修饰，修饰后，该属性成员，就不能再外部被随意的修改了

**构造函数中，可以对只读的属性成员的数据进行修改**

如果构造函数中没有任何的参数，类中的属性成员此时已经使用readonly 修饰，那么外部也是不能对这个属性值进行更改的

构造函数中的参数可以使用readonly进行修饰，一旦修饰了，那么该类中就有了这个只读的成员属性了，外部可以访问，但是不能修改

构造函数中的参数可以使用public及private和protected 进行修改，无论是哪个进行修饰，该类中都会自动的添加一个这个属性的

```tsx
// 定义一个类
class Person {
    // readonly 修饰属性
    readonly name: string
    
    // 构造函数
    constructor(name: string) {
        this.name = name
	}
    
    // 方法
    sayHi() {
        console.log('考你日瓦', this.name)
        // 类中的普通方法中，也是不能修改readonly修饰的成员属性值
        // this.name = '大甜甜'
    }
}

// 实例化对象
const person = new Person('小甜甜')
console.log(person)
console.log(person.name)
// 此时无法修改，因为name 属性是只读属性
person.name = '大甜甜'
console.log(person.name)
```

```tsx
// 定义一个类
class Person {    
    // readonly 修饰类中的构造函数中的参数（参数属性）
    // 构造函数中的name参数，一旦使用readonly进行修饰后，那么该name参数可以叫参数属性
    // 构造函数中的name参数，一旦使用readonly进行修饰后，那么Person中就有了一个name的属性成员
    // 构造函数中的name参数，一旦使用readonly进行修饰后，外部也是无法修改类中name属性成员值得
    constructor(readonly name: string = '大甜甜') {
        this.name = name
	}
    
    // 构造函数中的name参数，一旦使用public进行修饰后，那么Person类中就有了一个公共的name属性成员了
    //constructor(public name: string = '大甜甜') {
    //    this.name = name
	//}
    
    // 构造函数中的name参数，一旦使用private进行修饰后，那么Person类中就有了一个私有的name属性成员了
    //constructor(private name: string = '大甜甜') {
    //    this.name = name
	//}
    
    // 构造函数中的name参数，一旦使用protected进行修饰后，那么Person类中就有了一个受保护的name属性成员了（只能在本类和派生类中进行使用）
    //constructor(protected name: string = '大甜甜') {
    //    this.name = name
	//}
}

// 实例化对象
const person = new Person('小甜甜')
console.log(person)
console.log(person.name)
```

#### 存储器

存取器：让我们可以有效地控制对对象汇总的成员的访问，可以通过getters和setters来进行操作

```tsx
// 外部可以传入姓氏和名字数据，同时使用set和get控制姓名的数据，外部也可以进行修改操作
class Person {
    fisrtName: string // 姓氏
    lastName: string // 名字
    constructor(fisrtName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
    
    // 姓名的成员属性（外部可以访问，也可以修改）
    
    // 读取器-----负责读取数据的
    get fullName() {
        return this.firstName + '_' + this.lastName
    }
    
    // 设置器-----负责设置数据的（修改）
    set fullName(val) {
        let names = val.split('_')
        this.firstName = names[0]
        this.lastNmae = names[1]
    }
}

// 实例化对象
const person = new Person('东方'，'不败')
console.log(person)
// 获取该属性成员属性
console.log(person.fullName)
// 设置该属性的数据
person.fullName = '诸葛_孔明'
console.log(person.fullName)
```

#### 静态成员

静态成员： 在类中通过 **static** 修饰的属性或者方法，那么就是静态的属性及静态的方法，也称之为：静态成员

静态成员在使用的时候是通过类名 **.** 的这种语法来调用的

```tsx
// 定义一个类
class Person {
    // 静态属性
    // 类中默认有一个内置的name属性，所以呢，此时会出现错误的提示信息
    static name1: string
    // 构造函数是不能通过static来进行修饰的
    constructor(name: string) {
        // 此时this是实例对象，name1是静态属性，不能通过实例对象直接调用静态属性来使用
        //this.name1 = name
    }
    // 静态方法
    static sayHi() {
        console.log('萨瓦迪卡')
    }
}

// 实例化对象
// const person:Person = new Person('小甜甜')
// 通过实例对象调用的属性（实例属性）
// console.log(person.name)
// 通过实例对象调用的方法（实例方法）
//person.sayHi()

// 通过类名.静态属性的方式来访问该成员数据
console.log(Person.name1)
// 通过类名.静态属性的方式来设置该成员数据
Person.name1 = '佐助'
// 通过类名.静态方法的方式来调用内部的静态方法
Person.sayHi()
```

#### 抽象类

抽象类：包含抽象方法（抽象方法一般没有任何的具体内容的实现），也可以包含实例方法，抽象类是不能被实例化，为了让子类进行实例化及实现内部的抽象方法

抽象类的目的或者作用是为子类服务的

```tsx
// 定义一个抽象类
abstract class Animal {
    // 抽象属性
    abstract name: string
    // 抽象方法
    // 抽象方法不能有具体的实现
    abstract eat()
    
    // 实例方法
    sayHi() {
        console.log('您好啊')
    }
}
// 不能实例化抽象类的对象
// const ani: Animal = new Animal()

// 定义一个子类（派生类）Dog
class Dog extends Animal {
    name: string = '小黄'
    // 重新实现抽象类中的方法，此时这个方法就是当前Dog类的实例方法了
    eat() {
        console.log('舔着吃，真好吃')
	}
}

// 实例化Dog的对象
const dog:Dog = new Dog()
dog.eat()
//调用的事抽象类的实例方法
dog.sayHi()
console.log(dog.name)

```

### 函数

#### 函数

函数：封装了一些重复使用的代码，在需要的时候直接调用即可

```tsx
// js中的书写方式-----> 在ts中仍然适用
// 函数声明，命名函数
function add(x,y) {
    return x + y
}

// 函数表单时，匿名函数
const add2 = function(x,y) {
    return x + y
}
```

```tsx
// ts中的书写方式
// 函数声明，命名函数
// 函数中的x和y的参数类型都是string类型的，小括号后面的：string代表的是该函数的返回值也是string类型
function add(x：string,y: string): string {
    return x + y
}

const result：string = add( '111','222')

// 函数表单时，匿名函数
const add2 = function(x：number,y: number): number {
    return x + y
}

const result1 = add(12,13)
```

```tsx
// 函数的完整的写法
// add ----> 变量名 ----> 函数add
// (x：number,y: number) => number 当前的这个函数的类型
// function (x:number,y:number):number { return x + y} 就相当于符合上面的这个函数类型的值
const add :(x：number,y: number) => number = function(x：number,y: number): number {
    rerturn x + y
}

const result = add(10,20)
```

#### 可选参数和默认参数

可选参数：函数在声明的时候，内部的参数使用了？进行修饰，那么就表示该参数可以传入也可以不用传入，叫可选参数

默认参数：函数在声明的时候，内部的参数有自己的默认值，此时的这个参数就可以叫默认参数

```tsx
// 定义一个函数：传入姓氏和名字，可以得到姓名（姓氏+名字=姓名）
// 需求：如果不传入任何内容，那么就返回默认的姓氏
// 需求：如果只传入姓氏，那么就返回姓氏
// 需求：如果传入姓氏和名字，那么返回的就是姓名
const getFullName(firstName: string = '东方', lastName: ?string ): string {
    if(lastName) {
        return lastName
    }else{
        return firstName + lastName
    }
}

// 函数调用
// 什么也不传入
console.log(getFullName())
// 只传入姓氏
console.log(getFullName('诸葛'))
// 传入姓氏和名字
console.log(getFullName('诸葛','孔明'))
```

#### 剩余参数

剩余参数也叫rest参数

剩余参数是放在函数声明的时候所有的参数的最后

```tsx
// ...args:string[] ----->剩余的参数，放在了一个字符串的数组中，args里面
function showMsg( str:string, ...args:string[]) {
    console.log(str)
    console.log(args)
}

showMsg('a','b','c','d','e')
```

#### 函数重载

函数重载：函数名字相同，函数的参数及个数不同

```tsx
// 定义一个函数
// 需求：我们有一个add函数，它可以接受2个string类型的参数进行拼接，也可以接受2个number类型的参数进行相加

// 函数重载声明(如果不声明，则不会报错提示)
function add(x: string, y:string): string
function add(x: number, y: number): number

// 函数声明
function add(x: string | number, y: string | number) {
    if(typeof x === 'string' && typeof y === 'string') {
        return x + y // 字符串拼接
    }else if(typeof x === 'number' && typeof y === 'number') {
        return x + y // 数字相加
    }
}

// 函数调用
console.log(add('诸葛'，'孔明'))
console.log(add(10,20))
```

### 泛型

#### 泛型

泛型：在定义函数、接口、类的时候不能预先确定要使用的数据的类型，而是在使用函数、接口、类的时候才能确定数据的类型

```tsx
// 需求：定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量，函数的作用：根据数量产生对应个数的数据，存放在一个数组中

// 定义一个函数
function getArr<T>(value: T, count:number): T[] {
    // 根据数据和数量产生一个数组
    const arr: Array<T> = []
    for(let i = 0, i < count, i++) {
        arr.push(value)
    }
    reuturn arr 
}

const arr1 = getArr<string>('abcdef', 3)
const arr2 = getArr<number>(200.23, 3)
```

#### 多个泛型参数的函数

多个泛型参数的函数：函数中有多个泛型的参数

```tsx
function getMsg<K, V>(value1:K, value2:V): [K, V] {
    return [value1, value2]
}

cosnt arr1 = getMsg<string, number>('jack', 100.23)
console.log(arr1[0].split(''))
console.log(arr1[1].toFixed(1))
```

#### 泛型接口

泛型接口： 在定义接口的时候，为接口中的属性或者方法定义泛型类型，在使用接口时，再指定具体的泛型类型

```tsx
// 需求：定义一个类，用来存储用户的相关信息（id，名字，年龄）
// 通过一个类的实例对象调用add方法可以添加多个用户信息对象，调用getUserId方法可以根据id获取某个指定的用户信息对象

// 定义一个泛型接口
interface IBaseCRUD<T> {
    data: Array<T>
    add: (t: T) => T
    getUserId: (id: number) => T
}

// 定义一个用户信息的类
class User {
    id?: number //用户的id ?代表该属性可有可无
    name: string //用户的姓名
    age: number // 用户的年龄
    // 构造函数
    constructor(name: string, age: number) {
        this.name = name 
        this.age = age
    }
}

// 定义一个类，可以针对用户的信息对象进行增加及查询的操作
// CRUD -----> create,Read,Update,Delete
class UserCRUD implement IBaseCRUD<User>{
    // 用来保存多个User类型的用户信息对象
    data: Array<User> = []
    // 用来存储用户信息对象的
    add(user: User) : User {
        // 产生id
        user.id = Date.now() + Math.random()
        // 把用户信息对象添加到data数组中
        this.data.push(user)
        return user
    } 
    // 根据id查询指定的用户信息对象
    getUserId(id: number): User {
        return this.data.find(user => user.id === id)
    } 
}

// 实例化添加用户信息对象的类UserCRUD
const userCRUD: UserCRUD = new UserCRUD()
// 调用添加数据的方法
UserCRUD.add(new user('jack',20))
UserCRUD.add(new user('tom',25))
const { id } = UserCRUD.add(new user('luck',23))
UserCRUD.add(new user('rouse',21))
console.log(UserCRUD.data)
UserCRUD.getUserId(id)
```

#### 泛型类

```tsx
// 定义一个类，类中的属性值的类型是不确定，方法中的参数及返回值的类型也是不确定

// 定义一个泛型类
class GenericNumber<T> {
    // 默认的属性的值的类型是泛型类型
    defaulValue: T
    add: (x: T, y: T) => T
}

// 在实例化类的对象的时候，再确定泛型的类型
const g1: GenericNumber<number> = new GenericNumber<number>()
// 设置属性值
g1.defaultValue = 100
// 相加的方法
g1.add = function(x, y) {
    return x + y
}
console.log(g1.add(g1.defaultValue, 20))

// 在实例化类的对象的时候，再确定泛型的类型
const g2: GenericNumber<string> = new GenericNumber<string>()
// 设置属性值
g1.defaultValue = '哈哈'
// 相加的方法
g1.add = function(x, y) {
    return x + y
}
console.log(g1.add('你好', g2.defaultValue))
```

#### 泛型约束

如果我们对一个泛型参数取length属性，会报错，因为这个泛型根本就不知道它有这个属性

```tsx
// 定义一个接口，用来约束将来的某个类型中必须有length这个属性
interface Ilength {
    // 接口中有一个属性length
    length: number
}

function getLength<T extends Ilength>(X：T)：number {
    return x.length
}

console.log(getLength<string>('what are you doing'))
```

### 声明文件

当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

```tsx
declare var 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明（含有子属性的）全局对象
interface 和 type 声明全局类型
export 导出变量
export namespace 导出（含有子属性的）对象
export default ES6 默认导出
export = commonjs 导出模块
export as namespace UMD 库声明全局变量
declare global 扩展全局变量
declare module 扩展模块
/// <reference /> 三斜线指令
```

### 内置对象

```tsx
javaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。

内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。

ECMAScript 的内置对象§
ECMAScript 标准提供的内置对象有：

Boolean、Error、Date、RegExp 等。

我们可以在 TypeScript 中将变量定义为这些类型：

let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
更多的内置对象，可以查看 MDN 的文档。

而他们的定义文件，则在 TypeScript 核心库的定义文件中。

DOM 和 BOM 的内置对象§
DOM 和 BOM 提供的内置对象有：

Document、HTMLElement、Event、NodeList 等。

TypeScript 中会经常用到这些类型：

let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});
它们的定义文件同样在 TypeScript 核心库的定义文件中。
```

