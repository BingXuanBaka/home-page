// this file is from https://github.com/BingXuanOwO/Spring-Festival-Countdown/blob/main/src/functions.js
// original project licence under MIT licence.

export function getIsNewYear(timeNow,newYearTime){
    let isNewYear = newYearTime - timeNow < 0;

    // 如果过了新年5天后,为空
    // if(timeNow - newYearTime > 432000000){
    //   isNewYear = false
    // }

    return isNewYear
}

export function parsingTime(timeStamp){
    let parsedTime = ""
    let time = new Date(timeStamp)

    parsedTime += `${time.getFullYear()}年${time.getMonth() + 1}月${time.getDate() + 1}日`;
    
    parsedTime += " "

    let hour = time.getHours();
    let minute = time.getMinutes();
    let seconds = time.getSeconds();

    parsedTime += `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${seconds < 10 ? '0' + seconds : seconds}`;


    return parsedTime
}

export function parsingRemainTime(remainTime){
    let time = Math.floor(remainTime / 1000);

    // 秒
    let seconds = time % 60;
    time = Math.floor(time / 60);

    // 分
    let minutes = time % 60;
    time = Math.floor(time / 60);

    // 小时
    let hour = time % 24;
    time = Math.floor(time / 24);

    // 天
    let day = time;

    
    let parsedRemainTime = "";

    parsedRemainTime += day > 0 ? day + "天" : "";
    parsedRemainTime += hour > 0 ? hour + "小时" : "";
    parsedRemainTime += minutes > 0 ? minutes + "分" : "";
    parsedRemainTime += seconds > 0 ? seconds + "秒" : "";

    return parsedRemainTime
}


export class Firework {
    // 构造器
    constructor(x,y,ctx){
        this.x = x
        this.y = y
        this.ctx = ctx

        this.hue = Math.random() * 360

        this.radius = Math.round(Math.random() * 6 + 4)

        // 半径大的时候数量同步会增加
        this.count = Math.round(Math.random() * 20 + (this.radius * 5))

        this.speed = 5
        this.speedNow = this.speed
        this.fireupSpeed = this.speed

        this.onFireUping = true
        this.fireUpHeight = 0

        this.gravaty = 1

        this.alpha = 1

        this.points = []

        for (let i = 0; i < this.count; i++) {
            // 生成点角度半径
            let point = new Point;
            point.angle =  Math.random() * 360 ;
            point.radius = i > 10 ? Math.random() * this.radius : Math.random * 2 + this.radius - 2;

            // 在范围内随机颜色
            point.hsl = `${Math.ceil(Math.random() * (this.hue - 5) + 5)},${Math.ceil(Math.random() * 20 + 70)}%,${Math.ceil(Math.random() * 20 + 40)}%`

            // // 求出点的xy
            // let arcx = Math.cos(radians) * point.radius
            // let arcy = Math.sin(radians) * point.radius + (this.gravaty * 0.1)

            // // 开始绘制
            // this.ctx.beginPath();
            // this.ctx.arc(arcx + this.x, arcy + this.y , 2, Math.PI * 2, false);

            // // 填色
            // this.ctx.closePath();
            // let color = `HSLA(${point.hsl},1)`
            // this.ctx.fillStyle = color
            // this.ctx.fill();

            this.points.push(point)
        }
    }

    // 画每帧的烟花
    drawFireworks(){
        for (let index = 0; index < this.points.length; index++) {
            const element = this.points[index];

            // 求出点的xy
            let arcx = Math.cos(element.angle) * element.radius
            let arcy = Math.sin(element.angle) * element.radius + this.gravaty
            
            // 开始绘制
            this.ctx.beginPath();
            this.ctx.arc(arcx + this.x, arcy + this.y , 2, Math.PI * 2, false);

            // 填色
            this.ctx.closePath();
            this.ctx.fillStyle = `HSLA(${element.hsl},${Math.sqrt(1 - (this.alpha - 1)* (this.alpha - 1))})`
            this.ctx.fill();

            // 通过增大半径逐渐将点外移
            element.radius *= (1 + (this.speedNow / 80))
            
        }

        // 计算速度
        this.speedNow = this.speedNow > (this.speed * 0.975) ? this.speedNow * 0.9980 : this.speedNow * 0.98 ;

        // 计算透明度
        this.alpha -= 0.012;
        // 计算y下坠值
        this.gravaty *= 1.053
    }

    drawOnFireUp(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, window.innerHeight - this.fireUpHeight , 3 , Math.PI * 2 , false)
        this.ctx.closePath();
        this.ctx.fillStyle = `HSLA(${this.hue},80%,50%)`
        this.ctx.fill()
        
        this.fireUpHeight += (1 + this.fireupSpeed) * window.innerHeight / 600
        
        
        if(window.innerHeight - this.fireUpHeight <= this.y){
            this.onFireUping = false
            console.log(this.fireUpHeight + ',' +this.y)
        }
        this.fireupSpeed = this.fireupSpeed > (this.speed * 0.975) ? this.fireupSpeed * 0.9980 : this.fireupSpeed * 0.988 ;
        console.log(this.fireupSpeed)
        // 
    }
}


class Point{
    constructor(radius,hsl,speed,angle){
        this.radius = radius;
        this.hsl = hsl;
        this.speed = speed;
        this.angle = angle;
    }
}