// 游戏数据
const gameData = {
    // 诈骗场景剧本
    scenes: [
        {
            id: "police",
            title: "冒充公检法诈骗",
            description: "你接到一个自称是公安局的电话，对方说你涉嫌洗钱，需要配合调查。",
            rounds: [
                {
                    dialogue: "电话那头的人说：\"您好，这里是公安局经侦大队，您的银行卡涉嫌洗钱，请配合我们调查。\"",
                    options: [
                        { text: "相信对方，按照要求提供个人信息", correct: false, message: "错误选择！泄露个人信息会让骗子有机可乘。" },
                        { text: "挂断电话，拨打110核实", correct: true, message: "正确选择！公检法机关不会通过电话办案。" },
                        { text: "按照要求转账到安全账户", correct: false, message: "错误选择！公检法机关没有安全账户。" }
                    ]
                },
                {
                    dialogue: "对方发来一张‘通缉令’，上面有你的照片和个人信息。",
                    options: [
                        { text: "感到害怕，立即按照要求操作", correct: false, message: "错误选择！通缉令不会通过电话发送。" },
                        { text: "冷静思考，向家人朋友求助", correct: true, message: "正确选择！遇到这种情况应该先与亲友商量。" },
                        { text: "按照要求转账自证清白", correct: false, message: "错误选择！转账自证清白是典型的诈骗手法。" }
                    ]
                },
                {
                    dialogue: "对方要求你不要告诉任何人，否则会影响案件调查。",
                    options: [
                        { text: "遵守要求，不告诉任何人", correct: false, message: "错误选择！骗子就是想隔离你，让你无法得到帮助。" },
                        { text: "偷偷告诉家人，寻求他们的意见", correct: true, message: "正确选择！多听取他人意见可以避免被骗。" },
                        { text: "按照要求转账到指定账户", correct: false, message: "错误选择！任何要求转账的都是诈骗。" }
                    ]
                }
            ],
            winCase: {
                title: "真实案例",
                content: "2025年4月，刘女士接到自称公安局的电话，对方称其涉嫌洗钱，要求转账到安全账户。刘女士信以为真，转账40万元后发现被骗。警方提醒：公检法机关不会通过电话办案，也没有安全账户。"
            },
            loseCase: {
                title: "真实案例",
                content: "2025年3月，王女士接到冒充公检法的电话，对方以涉嫌犯罪为由，要求转账到安全账户。王女士按照要求转账15万元，后发现被骗。警方提醒：遇到此类电话应立即挂断并拨打110核实。"
            }
        },
        {
            id: "investment",
            title: "养老投资诈骗",
            description: "你收到一条短信，说有一款高回报的养老理财产品，年化收益8%。",
            rounds: [
                {
                    dialogue: "短信内容：\"专为老年人设计的养老理财产品，年化收益8%，保本保息，名额有限。\"",
                    options: [
                        { text: "感兴趣，立即联系对方", correct: false, message: "错误选择！高回报的投资往往是骗局。" },
                        { text: "不理会，删除短信", correct: true, message: "正确选择！天上不会掉馅饼。" },
                        { text: "向家人咨询", correct: true, message: "正确选择！多与家人商量可以避免被骗。" }
                    ]
                },
                {
                    dialogue: "对方打电话给你，说今天是最后一天优惠，错过就没有了。",
                    options: [
                        { text: "害怕错过，立即投资", correct: false, message: "错误选择！限时优惠是常见的诈骗手法。" },
                        { text: "冷静思考，拒绝投资", correct: true, message: "正确选择！不要被紧迫感冲昏头脑。" },
                        { text: "向银行工作人员咨询", correct: true, message: "正确选择！银行工作人员可以帮助辨别真伪。" }
                    ]
                },
                {
                    dialogue: "对方要求你先交手续费，然后才能开始投资。",
                    options: [
                        { text: "按照要求交手续费", correct: false, message: "错误选择！先交钱的投资都是骗局。" },
                        { text: "拒绝交手续费，放弃投资", correct: true, message: "正确选择！正规投资不需要先交手续费。" },
                        { text: "向家人借钱交手续费", correct: false, message: "错误选择！不要为了投资向他人借钱。" }
                    ]
                }
            ],
            winCase: {
                title: "真实案例",
                content: "2025年5月，张女士接到养老投资诈骗电话，对方称有高回报的养老理财产品。张女士咨询家人后，意识到是骗局，避免了财产损失。警方提醒：年化收益超过6%的投资需谨慎。"
            },
            loseCase: {
                title: "真实案例",
                content: "2025年2月，李大爷投资了一款声称年化收益10%的养老理财产品，先后投入20万元，最终血本无归。警方提醒：不要相信高回报的投资承诺。"
            }
        },
        {
            id: "healthcare",
            title: "保健品诈骗",
            description: "你收到一张免费体检的邀请函，说是专门为老年人提供的服务。",
            rounds: [
                {
                    dialogue: "邀请函内容：\"免费为60岁以上老人体检，还有礼品赠送。\"",
                    options: [
                        { text: "欣然前往，参加免费体检", correct: false, message: "错误选择！免费体检往往是保健品诈骗的开始。" },
                        { text: "不理会，丢弃邀请函", correct: true, message: "正确选择！不要轻易相信免费的东西。" },
                        { text: "向社区工作人员咨询", correct: true, message: "正确选择！社区工作人员可以帮助辨别真伪。" }
                    ]
                },
                {
                    dialogue: "体检后，工作人员说你身体有很多问题，需要购买他们的保健品。",
                    options: [
                        { text: "相信工作人员，购买保健品", correct: false, message: "错误选择！这是常见的保健品诈骗手法。" },
                        { text: "去正规医院检查", correct: true, message: "正确选择！身体问题应该去正规医院检查。" },
                        { text: "向家人咨询", correct: true, message: "正确选择！多与家人商量可以避免被骗。" }
                    ]
                },
                {
                    dialogue: "工作人员说今天购买有优惠，还能免费赠送其他保健品。",
                    options: [
                        { text: "抓住优惠，购买保健品", correct: false, message: "错误选择！优惠是为了诱导你购买。" },
                        { text: "拒绝购买，离开现场", correct: true, message: "正确选择！不要被优惠诱惑。" },
                        { text: "先买一点试试效果", correct: false, message: "错误选择！一旦开始购买，可能会被持续诱导。" }
                    ]
                }
            ],
            winCase: {
                title: "真实案例",
                content: "2025年6月，王阿姨收到免费体检邀请，她向社区工作人员咨询后，得知是保健品诈骗陷阱，避免了财产损失。警方提醒：不要相信免费体检后推荐的保健品。"
            },
            loseCase: {
                title: "真实案例",
                content: "2025年3月，刘大爷参加免费体检后，被工作人员说服购买了5万元的保健品，后发现这些保健品只是普通食品。警方提醒：保健品不能替代药物治疗。"
            }
        },
        {
            id: "relative",
            title: "冒充亲友诈骗",
            description: "你接到一个电话，对方自称是你的儿子，说他出了车祸，需要钱。",
            rounds: [
                {
                    dialogue: "电话那头的人说：\"妈，我是小明，我出车祸了，需要5万元医药费。\"",
                    options: [
                        { text: "相信对方，立即汇款", correct: false, message: "错误选择！应该先核实对方身份。" },
                        { text: "要求对方说出详细信息", correct: true, message: "正确选择！应该通过细节核实身份。" },
                        { text: "挂断电话，拨打儿子的真实号码", correct: true, message: "正确选择！直接联系儿子确认情况。" }
                    ]
                },
                {
                    dialogue: "对方说情况紧急，让你不要告诉其他人，以免家人担心。",
                    options: [
                        { text: "遵守要求，不告诉其他人", correct: false, message: "错误选择！骗子想隔离你，让你无法得到帮助。" },
                        { text: "立即告诉其他家人", correct: true, message: "正确选择！多与家人商量可以避免被骗。" },
                        { text: "按照要求汇款", correct: false, message: "错误选择！在未核实身份前不要汇款。" }
                    ]
                },
                {
                    dialogue: "对方提供了一个银行账号，让你尽快汇款。",
                    options: [
                        { text: "立即去银行汇款", correct: false, message: "错误选择！在未核实身份前不要汇款。" },
                        { text: "再次拨打儿子的真实号码核实", correct: true, message: "正确选择！必须确认情况的真实性。" },
                        { text: "向警方求助", correct: true, message: "正确选择！警方可以帮助核实情况。" }
                    ]
                }
            ],
            winCase: {
                title: "真实案例",
                content: "2025年4月，李女士接到冒充儿子的电话，对方称出车祸需要钱。李女士立即拨打儿子的真实号码核实，发现是骗局，避免了财产损失。警方提醒：接到亲友紧急求助电话，应先核实身份。"
            },
            loseCase: {
                title: "真实案例",
                content: "2025年2月，王大爷接到冒充孙子的电话，对方称被警察抓了需要钱。王大爷信以为真，汇款5万元后发现被骗。警方提醒：遇到此类情况应先与其他家人核实。"
            }
        },
        {
            id: "prize",
            title: "中奖退税诈骗",
            description: "你收到一条短信，说你中了大奖，需要先交手续费才能领取。",
            rounds: [
                {
                    dialogue: "短信内容：\"恭喜您中了我公司周年庆典大奖，奖金100万元，请联系我们领取。\"",
                    options: [
                        { text: "兴奋不已，立即联系对方", correct: false, message: "错误选择！不要相信天上掉馅饼的好事。" },
                        { text: "不理会，删除短信", correct: true, message: "正确选择！中奖信息多为诈骗。" },
                        { text: "向家人咨询", correct: true, message: "正确选择！多与家人商量可以避免被骗。" }
                    ]
                },
                {
                    dialogue: "对方说需要先交5万元的个人所得税，才能领取奖金。",
                    options: [
                        { text: "按照要求交个人所得税", correct: false, message: "错误选择！先交钱的中奖都是骗局。" },
                        { text: "拒绝交个人所得税，放弃领奖", correct: true, message: "正确选择！正规中奖不会要求先交钱。" },
                        { text: "向税务部门咨询", correct: true, message: "正确选择！税务部门可以帮助辨别真伪。" }
                    ]
                },
                {
                    dialogue: "对方说如果今天不交钱，就会失去领奖资格。",
                    options: [
                        { text: "害怕失去资格，立即交钱", correct: false, message: "错误选择！紧迫感是诈骗的常见手法。" },
                        { text: "冷静思考，拒绝交钱", correct: true, message: "正确选择！不要被紧迫感冲昏头脑。" },
                        { text: "向警方求助", correct: true, message: "正确选择！警方可以帮助辨别真伪。" }
                    ]
                }
            ],
            winCase: {
                title: "真实案例",
                content: "2025年5月，张女士收到中奖短信，对方称中了100万元，需要先交个人所得税。张女士咨询家人后，意识到是骗局，避免了财产损失。警方提醒：中奖信息多为诈骗，不要相信。"
            },
            loseCase: {
                title: "真实案例",
                content: "2025年3月，刘大爷收到中奖短信，对方称中了50万元，需要先交3万元手续费。刘大爷按照要求汇款后，对方消失，才发现被骗。警方提醒：先交钱的中奖都是骗局。"
            }
        },
        {
            id: "romance",
            title: "黄昏恋诈骗",
            description: "你在网上认识了一个自称离异的异性，对方对你关怀备至。",
            rounds: [
                {
                    dialogue: "对方每天对你嘘寒问暖，关心你的生活，很快你们建立了恋爱关系。",
                    options: [
                        { text: "完全信任对方，投入感情", correct: false, message: "错误选择！网络交友需谨慎。" },
                        { text: "保持警惕，不要透露个人信息", correct: true, message: "正确选择！网络交友要保护个人信息。" },
                        { text: "向家人介绍对方", correct: true, message: "正确选择！多与家人商量可以避免被骗。" }
                    ]
                },
                {
                    dialogue: "对方说有一个投资机会，稳赚不赔，希望你一起投资。",
                    options: [
                        { text: "相信对方，投资赚钱", correct: false, message: "错误选择！网络恋爱+投资是常见的诈骗手法。" },
                        { text: "拒绝投资，保持警惕", correct: true, message: "正确选择！不要相信稳赚不赔的投资。" },
                        { text: "向家人咨询", correct: true, message: "正确选择！多与家人商量可以避免被骗。" }
                    ]
                },
                {
                    dialogue: "对方说投资需要一笔启动资金，希望你帮忙周转。",
                    options: [
                        { text: "帮助对方，汇款支持", correct: false, message: "错误选择！不要给网络恋人汇款。" },
                        { text: "拒绝汇款，结束关系", correct: true, message: "正确选择！网络恋爱中要求汇款的都是诈骗。" },
                        { text: "向警方求助", correct: true, message: "正确选择！警方可以帮助辨别真伪。" }
                    ]
                }
            ],
            winCase: {
                title: "真实案例",
                content: "2025年6月，李阿姨在网上认识了一个自称离异的男子，对方对她关怀备至。当对方提出投资要求时，李阿姨向家人咨询，意识到是骗局，避免了财产损失。警方提醒：网络交友需谨慎，不要相信稳赚不赔的投资。"
            },
            loseCase: {
                title: "真实案例",
                content: "2025年4月，王大爷在网上认识了一个自称离异的女子，对方对他关怀备至。王大爷相信了对方的投资建议，先后投入280万元，最终血本无归。警方提醒：网络恋爱中要求投资或汇款的都是诈骗。"
            }
        }
    ],
    // 游戏状态
    state: {
        playedScenes: [],
        currentScene: null,
        currentRound: 0,
        selectedOptions: [],
        errorCount: {}
    }
};

// DOM元素
const elements = {
    home: document.getElementById('home'),
    game: document.getElementById('game'),
    win: document.getElementById('win'),
    lose: document.getElementById('lose'),
    startBtn: document.getElementById('start-btn'),
    sceneTitle: document.getElementById('scene-title'),
    sceneDescription: document.getElementById('scene-description'),
    sceneIntro: document.getElementById('scene-intro'),
    sceneContent: document.getElementById('scene-content'),
    dialogue: document.getElementById('dialogue'),
    options: document.getElementById('options'),
    winCase: document.getElementById('win-case'),
    loseCase: document.getElementById('lose-case'),
    playAgainBtn: document.getElementById('play-again-btn'),
    playAgainBtnLose: document.getElementById('play-again-btn-lose'),
    errorModal: document.getElementById('error-modal')
};

// 初始化游戏
function initGame() {
    // 从本地存储加载游戏状态
    loadGameState();
    
    // 绑定事件
    elements.startBtn.addEventListener('click', startGame);
    elements.playAgainBtn.addEventListener('click', playAgain);
    elements.playAgainBtnLose.addEventListener('click', playAgain);
}

// 从本地存储加载游戏状态
function loadGameState() {
    const savedState = localStorage.getItem('silverHairGuardianState');
    if (savedState) {
        gameData.state = JSON.parse(savedState);
    }
}

// 保存游戏状态到本地存储
function saveGameState() {
    localStorage.setItem('silverHairGuardianState', JSON.stringify(gameData.state));
}

// 开始游戏
function startGame() {
    // 选择一个未玩过的场景
    const availableScenes = gameData.scenes.filter(scene => !gameData.state.playedScenes.includes(scene.id));
    
    // 如果所有场景都玩过了，重置playedScenes
    if (availableScenes.length === 0) {
        gameData.state.playedScenes = [];
        saveGameState();
        startGame();
        return;
    }
    
    // 随机选择一个场景
    const randomIndex = Math.floor(Math.random() * availableScenes.length);
    const selectedScene = availableScenes[randomIndex];
    
    // 更新游戏状态
    gameData.state.currentScene = selectedScene;
    gameData.state.currentRound = 0;
    gameData.state.selectedOptions = [];
    gameData.state.errorCount = {};
    gameData.state.playedScenes.push(selectedScene.id);
    saveGameState();
    
    // 显示游戏页面
    elements.home.classList.remove('active');
    elements.game.classList.add('active');
    
    // 直接显示游戏场景
    elements.sceneIntro.classList.remove('active');
    elements.sceneContent.classList.add('active');
    showCurrentRound();
}

// 显示当前轮次
function showCurrentRound() {
    const scene = gameData.state.currentScene;
    const round = scene.rounds[gameData.state.currentRound];
    
    // 显示对话
    elements.dialogue.innerHTML = `<p>${round.dialogue}</p>`;
    
    // 显示选项
    elements.options.innerHTML = '';
    round.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.addEventListener('click', () => handleOptionSelect(index, option));
        elements.options.appendChild(button);
    });
}

// 处理选项选择
function handleOptionSelect(index, option) {
    const scene = gameData.state.currentScene;
    const round = scene.rounds[gameData.state.currentRound];
    
    // 记录选择
    gameData.state.selectedOptions.push(index);
    
    if (option.correct) {
        // 正确选择
        gameData.state.currentRound++;
        
        // 检查是否完成所有轮次
        if (gameData.state.currentRound >= scene.rounds.length) {
            showWin();
        } else {
            showCurrentRound();
        }
    } else {
        // 错误选择
        const optionKey = `${gameData.state.currentRound}-${index}`;
        if (gameData.state.errorCount[optionKey]) {
            // 重复错误选择，显示失败
            showLose();
        } else {
            // 第一次错误选择，显示提示
            gameData.state.errorCount[optionKey] = true;
            showErrorModal();
        }
    }
    
    saveGameState();
}

// 显示错误提示
function showErrorModal() {
    elements.errorModal.classList.add('active');
    setTimeout(() => {
        elements.errorModal.classList.remove('active');
    }, 1000);
}

// 显示胜利页面
function showWin() {
    const scene = gameData.state.currentScene;
    elements.winCase.innerHTML = `
        <h3>${scene.winCase.title}</h3>
        <p>${scene.winCase.content}</p>
    `;
    elements.game.classList.remove('active');
    elements.win.classList.add('active');
}

// 显示失败页面
function showLose() {
    const scene = gameData.state.currentScene;
    elements.loseCase.innerHTML = `
        <h3>${scene.loseCase.title}</h3>
        <p>${scene.loseCase.content}</p>
    `;
    elements.game.classList.remove('active');
    elements.lose.classList.add('active');
}

// 再玩一次
function playAgain() {
    elements.win.classList.remove('active');
    elements.lose.classList.remove('active');
    startGame();
}

// 初始化游戏
initGame();