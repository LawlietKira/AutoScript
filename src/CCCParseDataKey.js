// ==UserScript==
// @name         CCC后台数据名字显示
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       hjw
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @match        http://10.96.8.209:5001/
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    $(document).ready(function () {
        const USER_DATA = {
            _id: '用户id',
            homeLevel: '家园等级',
            bluePrint: '解锁的蓝图',
            face: '玩家捏脸数据',
            equipList: '玩家身上装备',
            rubbishTicket: '垃圾场门票',
            workGold: '工坊币（20000001）',
            exp: '经验',
            x: '玩家坐标',
            y: '玩家坐标',
            gold: '金币',
            workshopExp: '工坊声望',
            HP: '生命',
            z: '玩家坐标',
            oreTicket: '单人挖矿门票',
            regionList: '家园机器摆放',
            lucky: '幸运值',
            operationPlatformMachineId: '组装台机器',
            workShopLevel: '工坊等级',
            storyFinish: '剧情完成列表',
            sleepDayNum: '睡觉的次数',
            tutorial: '新手引导',
            buffer: '',
            orderDayNum: '当天接取订单数量',
            machineList: '机器列表',
            orderPerson: '个人订单',
            waterStorage: '水箱水量',
            operationPlatformList: '操作台放置道具列表',
            gender: '性别',
            HPMaxEat: '吃东西获得的永久加成',
            unionWaterDay: '上一次领取商会水塔的时间',
            roomId: '房间Id',
            homeName: '家园名字',
            chairId: '',
            scene: '玩家所在场景',
            bluePrintResearch: '正在研究的蓝图情况',
            sleepDay: '上一次睡觉的时间',
            nickName: '昵称',
            npcList: '',
            level: '等级',
            itemUUId: '特殊道具的UUID',
            operationPlatform: '几级操作台',
            leaveTime: '离线时间',
            package: '背包',
            mailList: '邮件列表',
            openId: '',
            userId: '用户id',
            SP: '体力',
            orderDay: '接取订单的天',
            slotMax: '背包格子购买数量',
            workPlatform: '等级几的工作台'
        }
        let flag = setInterval(() => {
            let hash = location.hash;
            let data = {};
            if (hash === '#/user_data/user_data') {
                data = USER_DATA;
            }
            let $tbody = $('.el-table__body').find('tbody');
            if ($tbody.text() !== '') {
                $tbody.find('tr').each((index, obj) => {
                    let $td = $(obj).find('td:eq(0)');
                    let text = $td.text().trim()
                    if (data[text]) {
                        $td.text(`${text}（${data[text]}）`)
                    }
                })
            }
        }, 1000)
    })
    // Your code here...
})();