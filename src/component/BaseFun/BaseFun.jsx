import 'isomorphic-fetch'
/**
 * 数组排序
 * 排序name
 */
function compare(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value2 < value1) {
            return 1;
        } else if (value2 > value1) {
            return -1;
        } else {
            return 0;
        }
    }
}


export { compare }


/**
 * 树结构算法
 * data数据
 * 从顶向下遍历
 */
function TreeMath(data) {
    let dataCurrent = []
    data.sort(compare('LevelString'))
    data.map((v) => {
        if (v.LevelString.length === 2) {//第一层
            newFunction(v);
        } else if (v.LevelString.length === 4) {//第二层
            dataCurrent.map((value1) => {
                if (value1.PK === Number(v.OriginalGuidString)) {
                    childrenFunction(value1, v)
                }
                return false
            })
        } else if (v.LevelString.length === 6) {
            dataCurrent.map((value2) => {
                childrenMap(value2, v, 0)
                return false
            })
        } else if (v.LevelString.length === 8) {
            dataCurrent.map((value3) => {
                childrenMap(value3, v, 1)
                return false
            })
        }
        return false
    })
    // console.log(dataCurrent)
    return dataCurrent

    function newFunction(v) {
        dataCurrent.push(new obj(v.LevelString, v.Caption, [], v.OriginalGuidString, v.PK));
    }

    function childrenFunction(value, v) {
        value
            .children
            .push(new obj(v.LevelString, v.Caption, [], v.OriginalGuidString, v.PK))
    }

    /**
     * 
     * @param {对比值} v 
     * @param {实际值} CurrentV 
     * @param {层级} key 
     */
    function childrenMap(v, CurrentV, key) {
        v
            .children
            .map((value) => {
                if (key > 0) {
                    childrenMap(value, CurrentV)
                    key--
                    return true
                } else {
                    if (value.PK === Number(CurrentV.OriginalGuidString)) {
                        childrenFunction(value, CurrentV)
                    }
                }
                return true
            })
    }
}

export { TreeMath }

/**
 * 
 * @param {数据源} data 
 * @param {层级深度} tier 
 */
function TreeMathFloat(data, tier) {
    data.sort(compare('LevelString'))
    // console.log(data)
    var TierArr = []
    for (var i = 0; i < tier; i++) {
        TierArr[i] = []
    }
    data.map((v) => {
        if (v.LevelString.length === 2) {
            v = new obj(v.LevelString, v.Caption, [], v.OriginalGuidString, v.PK)
            return TierArr[0].push(v)
        } else if (v.LevelString.length === 4) {
            v = new obj(v.LevelString, v.Caption, [], v.OriginalGuidString, v.PK)
            return TierArr[1].push(v)
        } else if (v.LevelString.length === 6) {
            v = new obj(v.LevelString, v.Caption, [], v.OriginalGuidString, v.PK)
            return TierArr[2].push(v)
        } else if (v.LevelString.length === 8) {
            v = new obj(v.LevelString, v.Caption, [], v.OriginalGuidString, v.PK)
            return TierArr[3].push(v)
        }
        return true
    })
    var newArr = []
    for (var j = tier - 1; j > -1; j--) {
        newArr = traverse(TierArr[j], newArr)
    }
    // console.log(newArr)
    return newArr

    function traverse(Target, Origin) {
        Target.map((TargetValue) => {
            for (var K = 0; K < Origin.length; K++) {
                if (TargetValue.PK === Origin[K].OriginalGuidString) {
                    TargetValue.children.push(Origin[K])
                }
            }
            return true
        })
        return Target;
    }
}

export { TreeMathFloat }
/**
 * 构造函数创建一个Tree需要的对象
 */
function obj(id, label, children, OriginalGuidString, PK) {
    this.id = id;
    this.label = label;
    this.children = children;
    this.OriginalGuidString = Number(OriginalGuidString);
    this.PK = PK;
}

/**
 * 端口号改变
 */
function IPserver(TF) {
    if (TF) {
        return '10.3.2.22:50002'
    } else {
        return '10.2.128.94:9016'
    }
}

export { IPserver }

function getTime() {
    var myDate = new Date()
    var mytime
    myDate.toLocaleDateString()
    myDate.getFullYear()
    myDate.getMonth();       //获取当前月份(0-11,0代表1月)
    myDate.getDate();        //获取当前日(1-31)
    myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
    myDate.getHours();       //获取当前小时数(0-23)
    myDate.getMinutes();     //获取当前分钟数(0-59)
    myDate.getSeconds();     //获取当前秒数(0-59)
    switch (myDate.getDay()) {
        case 0:
            mytime = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}S${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
            break;
        case 1:
            mytime = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}M${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
            break;
        case 2:
            mytime = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}T${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
            break;
        case 3:
            mytime = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}W${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
            break
        case 4:
            mytime = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}T${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
            break;
        case 5:
            mytime = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}F${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
            break;
        case 6:
            mytime = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}S${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
            break;
        default:
            mytime = null
    }
    return mytime
}

export { getTime }

/**
 * 
 * @param {链接} URL 
 * @param {内容} postBody 
 */
function postFetch(URL, postBody, Callback) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let request = new Request(URL, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(postBody),
        headers: myHeaders
    });
    fetch(request)
        .then(response => response.json())
        .then(result => {
            Callback(result)
        })
        .catch(res => {
            console.log(res)
        })
}

export { postFetch }

/**
 * 
 * @param {链接} URL 
 *
 */
function getFetch(URL, Callback) {
    fetch(URL, { method: "GET" })
        .then((response) => response.json())
        .then(data => {
            Callback(data)
        })
        .catch(error => error)
}

export { getFetch }