
class TheArrayTool {

    static removeAll(left, right) {
        try{
            let res = []
            for (let data of left) {
                if(!right.includes(data)) res.push(data)
            }
            return res
        } catch(e) {
            console.error(e)
            throw e
        }
    }

    static retainAll(left, right) {
        try{
            let res = []
            for (let data of left) {
                if(right.includes(data)) res.push(data)
            }
            return res
        } catch(e) {
            console.error(e)
            throw e
        }
    }

    static rightOutterJoin(left, right) {
        try{
            let res = []
            for (let data of right) {
                if(!left.includes(data)) res.push(data)
            }
            return res
        } catch(e) {
            console.error(e)
            throw e
        }
    }
}


module.exports = TheArrayTool
