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

export {compare}

/**
 * 树结构算法
 * data数据
 */
function TreeMath(data) {
    let dataCurrent = new Array()
    data.sort(compare('LevelString'))
    data.map((v) => {
        if (v.LevelString.length === 2) {
            newFunction(v);
            console.log(2)
        } else if (v.LevelString.length === 4) {
            dataCurrent.map((value1) => {
                if (value1.PK === Number(v.OriginalGuidString)) {
                    childrenFunction(value1, v)
                }
                return false
            })
        } else if (v.LevelString.length === 6) {
            dataCurrent.map((value2) => {
                childrenMap(value2, v)
                return false
            })
        } else if (v.LevelString.length === 8) {
            dataCurrent.map((value3) => {
                value3.children.map((value) => {
                    value
                        .children
                        .map((mapvalue) => {
                            childrenMap(mapvalue, v)
                            return true
                        })
                    return true
                })
                return false
            })
        }
        return false
    })
    console.log(dataCurrent)
    return dataCurrent

    function newFunction(v) {
        dataCurrent.push(new obj(v.LevelString, v.Caption, [], v.OriginalGuidString, v.PK));
    }

    function childrenFunction(value, v) {
        value
            .children
            .push(new obj(v.LevelString, v.Caption, [], v.OriginalGuidString, v.PK))
    }

    function childrenMap(v, CurrentV) {
        v
            .children
            .map((value) => {
                if (value.PK === Number(CurrentV.OriginalGuidString)) {
                    childrenFunction(value, CurrentV)
                }
                return true
            })
    }

    function Map(value, v, fn) {
        if (value.PK === Number(v.OriginalGuidString)) {
            fn()
        }
    }
}

export {TreeMath}

/**
 * 构造函数创建一个Tree需要的对象
 */
function obj(id, label, children, OriginalGuidString, PK) {
    this.id = id;
    this.label = label;
    this.children = children;
    this.OriginalGuidString = OriginalGuidString;
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

export {IPserver}