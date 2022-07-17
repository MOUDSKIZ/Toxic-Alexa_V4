const fs = require('fs')
  let _limitOrg = JSON.parse(fs.readFileSync('./database/limit.json'))
  const Options = require('../config.js')
  let limitawal = Options.limitawal
  const addInventoriLimit = (sender) => {
        const obj = {id: sender, limit: limitawal}
         _limitOrg.push(obj)
        fs.writeFileSync('./database/limit.json', JSON.stringify(_limitOrg))
   }
  const cekDuluJoinAdaApaKagaLimitnyaDiJson = (sender) => {
            let status = false
            Object.keys(_limitOrg).forEach((i) => {
                if (_limitOrg[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  const addLimit = (sender, amount) => {
            let position = false
            Object.keys(_limitOrg).forEach((i) => {
                if (_limitOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limitOrg[position].limit += amount
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limitOrg))
            }
        }
   const kurangLimit = (sender, amount) => {
            let position = false
            Object.keys(_limitOrg).forEach((i) => {
                if (_limitOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limitOrg[position].limit -= amount
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limitOrg))
            }
        }
   const getLimit = (sender) => {
            let position = false
            Object.keys(_limitOrg).forEach((i) => {
                if (_limitOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _limitOrg[position].limit
            }
        }     
        
   module.exports = { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit }   