/*
 * --------------------------------------------------
 * MNKR_SnsTalkMz Ver.0.0.1
 * Copyright (c) 2021 Munokura
 * This software is released under the MIT license.
 * http://opensource.org/licenses/mit-license.php
 * --------------------------------------------------
 */

/*:
 * @target MZ
 * @plugindesc SNS風会話システムを簡単に実現できます
 * @author oggy (改変 munokura)。
 *
 * @help
 * Copyright (c) 2018 おっぎー
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 *
 * 詳しい使い方はこちら↓
 * https://docs.google.com/presentation/d/1uJogZDEhNhlMZ40HZbYyUPYqLd_gC0R0laXGGb-ZyFI/edit#slide=id.p
 * 
 * 
 * このプラグインについて
 *   RPGツクールMV用に作成されたプラグインをMZ用に移植したものです。
 *   お問い合わせは改変者へお願いいたします。
 *
 * 利用規約:
 *   MITライセンスです。
 *   https://licenses.opensource.jp/MIT/MIT.html
 *   作者に無断で改変、再配布が可能で、
 *   利用形態（商用、18禁利用等）についても制限はありません。
 *
 * @param SnsMapId
 * @text SNSマップID
 * @desc SNS表示を有効にするマップID（0だとすべてのマップで有効）
 * @default 1
 * 
 * @param MaxLowerPictureId
 * @text ログ下ピクチャ最大ID
 * @desc 会話ログより下に表示されるピクチャの最大ID（0で下になるピクチャなし）
 * @default 1
 * 
 * @param SwipeScrollDamping
 * @text スワイプスクロール減速
 * @desc スワイプで会話をスクロールしたときの減速具合（0でずっと止まらない）
 * @default 0.5
 * 
 * @param ReverseTalkDirection
 * @text トーク方向反転
 * @desc トークの追加される方向を反転させます
 * @default false
 * @type boolean
 * 
 * @param LeftTalkBackgroundImage
 * @text 左トーク背景画像
 * @desc トークの背景画像（左寄せ用）
 * @default mob_talk
 * @type file
 * @dir img/pictures
 * 
 * @param RightTalkBackgroundImage
 * @text 右トーク背景画像
 * @desc トークの背景画像（右寄せ用）
 * @default player_talk
 * @type file
 * @dir img/pictures
 * 
 * @param LeftPictureTalkBackgroundImage
 * @text 左ピクチャトーク背景画像
 * @desc スタンプ・写真トークの背景画像（左寄せ用）
 * @type file
 * @dir img/pictures
 * 
 * @param RightPictureTalkBackgroundImage
 * @text 右ピクチャトーク背景画像
 * @desc スタンプ・写真トークの背景画像（右寄せ用）
 * @type file
 * @dir img/pictures
 * 
 * @param ChoiceItemBackgroundImage
 * @text 選択項目の背景画像
 * @desc 選択項目の背景画像
 * @default choice
 * @type file
 * @dir img/pictures
 * 
 * @param ChoiceWindowBackgroundImage
 * @text 選択肢ウィンドウ背景画像
 * @desc 選択肢ウィンドウの背景画像
 * @default choiceback
 * @type file
 * @dir img/pictures
 * 
 * @param StampImageSize
 * @text スタンプ画像サイズ
 * @desc スタンプ用画像のデフォルトサイズ
 * @type struct<ImageSize>
 * @default {"Width":"128", "Height":"128"}
 * 
 * @param PictureThumbnailImageSize
 * @text 写真サムネイルサイズ
 * @desc 写真サムネイル用画像のデフォルトサイズ
 * @type struct<ImageSize>
 * @default {"Width":"128", "Height":"286"}
 * 
 * @param PauseSnsSwitchId
 * @text ポーズ状態スイッチID
 * @desc ポーズ状態にするスイッチのID（ポーズ中はSNS表示の動画が停止する）
 * @default 1
 * @type switch
 * 
 * @param SkipModeSwitchId
 * @text スキップモードスイッチID
 * @desc スキップモードにするスイッチのID（スキップモード中は自動でトークが進む）
 * @default 2
 * @type switch
 * 
 * @param DisableSnsSwitchId
 * @text 無効状態スイッチID
 * @desc 無効状態にするスイッチのID（無効化中はSNS表示されなくなる）
 * @default 3
 * @type switch
 * 
 * @param NameTextStyle
 * @text 名前テキストスタイル
 * @desc トーク名前欄のテキストのスタイル
 * @type struct<TextStyle>
 * @default {"TextColor":"15", "OutlineColor":"15", "OutlineWidth":"0", "IsBold":"true"}
 * 
 * @param TalkTextStyle
 * @text トークテキストスタイル
 * @desc トーク本文のテキストのスタイル
 * @type struct<TextStyle>
 * @default {"TextColor":"15", "OutlineColor":"15", "OutlineWidth":"0", "IsBold":"true"}
 * 
 * @param ChoiceTextStyle
 * @text 選択テキストスタイル
 * @desc 選択肢テキストのスタイル
 * @type struct<TextStyle>
 * @default {"TextColor":"15", "OutlineColor":"15", "OutlineWidth":"0", "IsBold":"true"}
 * 
 * @param PlayerFaceImage
 * @text プレイヤー顔画像
 * @desc プレイヤーの顔候補の画像
 * @type file
 * @default sns_face
 * @dir img/faces
 * 
 * @param PlayerFaceVariableId
 * @text プレイヤー顔変数ID
 * @desc プレイヤーの顔番号(0～7)を格納する変数のID
 * @default 1
 * @type variable
 * 
 * @param NewTalkSoundParam
 * @text トーク追加時SE
 * @desc トーク追加時に鳴らすサウンド
 * @type struct<SoundParam>
 * @default {"File":"Decision2", "Volume":"90", "Pitch":"150"}
 * 
 * @param ShowChoiceSoundParam
 * @text 選択肢表示SE
 * @desc 選択肢表示時に鳴らすサウンド
 * @type struct<SoundParam>
 * @default {"File":"Decision2", "Volume":"90", "Pitch":"150"}
 * 
 * @param DecideChoiceSoundParam
 * @text 選択肢決定SE
 * @desc 選択肢決定時に鳴らすサウンド
 * @type struct<SoundParam>
 * @default {"File":"Decision2", "Volume":"90", "Pitch":"150"}
 * 
 * @param DebugSnsEventTest
 * @text テスト起動
 * @desc イベントテスト時に StartAtsutalkEvent から起動した扱いにします。
 * @default false
 * @type boolean
 * 
 * @param DebugEventTestBgGray
 * @text テスト背景グレー
 * @desc イベントテスト時に背景をグレーにします。
 * @default false
 * @type boolean
 * 
 * 
 * @command startatsutalkevent
 * @text SNSイベント開始
 * @desc SNSイベントを開始します。
 *
 * @arg commonEvewntId
 * @text コモンイベントID
 * @desc コモンイベントIDでSNSイベントを実行します。
 * @type common_event
 * @default 1
 * 
 * 
 * @command ClearAtsuTalkLog
 * @text 会話ログを消去
 * @desc 会話ログを消去します。
 * 
 * 
 * @command ChangeTalkRoom
 * @text トークルーム変更
 * @desc トークルームを変更します。
 *
 * @arg roomNumber
 * @text トークルーム番号
 * @desc 変更するトークルーム番号を指定。
 * @type number
 * @default 1
 * 
 * 
 * @command ChangeTalkRoomVar
 * @text トークルーム変更(変数)
 * @desc トークルームを変更します。
 *
 * @arg roomNumberVariableId
 * @text トークルーム番号(変数)
 * @desc 変更するトークルーム番号を指定する変数IDを指定。
 * @type variable
 * @default 1
 */

/*~struct~TextStyle:
 * @param TextColor
 * @text テキスト色
 * @desc テキストの色 (img/system/Window.pngのパレットを参照)
 * @default 0
 * @min 0
 * 
 * @param OutlineColor
 * @text アウトライン色
 * @desc アウトラインの色 (img/system/Window.pngのパレットを参照)
 * @default 15
 * 
 * @param OutlineWidth
 * @text アウトライン幅
 * @desc アウトラインの太さ
 * @default 4
 * 
 * @param IsBold
 * @text 太字
 * @desc 太字にする
 * @default false
 * @type boolean
 */

/*~struct~SoundParam:
 * @param File
 * @text ファイル
 * @desc 鳴らしたいサウンドファイル
 * @type file
 * @dir audio/se
 * 
 * @param Volume
 * @text 音量
 * @desc ボリューム
 * @default 90
 * 
 * @param Pitch
 * @text ピッチ
 * @desc ピッチ
 * @default 100
 */

/*~struct~ImageSize:
 * @param Width
 * @text 幅
 * @desc 横方向のピクセル数
 *
 * @param Height
 * @text 高さ
 * @desc 縦方向のピクセル数
 */

var _OggySns = {};
var pluginName = document.currentScript.src.split("/").pop().replace(/\.js$/, "");
var _Oggy_PluginParameters = JSON.parse(JSON.stringify(PluginManager.parameters(pluginName), function (key, value) {
    try {
        return JSON.parse(value);
    } catch (e) {
        try {
            return eval(value);
        } catch (e) {
            return value;
        }
    }
}));

(function () {
    'use strict';
    _OggySns.SnsMapId = _Oggy_PluginParameters['SnsMapId'];
    _OggySns.ReverseTalkDirection = _Oggy_PluginParameters['ReverseTalkDirection'];
    _OggySns.MaxLowerPictureId = _Oggy_PluginParameters['MaxLowerPictureId'];
    _OggySns.SwipeScrollDamping = _Oggy_PluginParameters['SwipeScrollDamping'];
    _OggySns.LeftTalkBackgroundImage = _Oggy_PluginParameters['LeftTalkBackgroundImage'];
    _OggySns.RightTalkBackgroundImage = _Oggy_PluginParameters['RightTalkBackgroundImage'];
    _OggySns.LeftPictureTalkBackgroundImage = _Oggy_PluginParameters['LeftPictureTalkBackgroundImage'];
    _OggySns.RightPictureTalkBackgroundImage = _Oggy_PluginParameters['RightPictureTalkBackgroundImage'];
    _OggySns.ChoiceItemBackgroundImage = _Oggy_PluginParameters['ChoiceItemBackgroundImage'];
    _OggySns.ChoiceWindowBackgroundImage = _Oggy_PluginParameters['ChoiceWindowBackgroundImage'];
    _OggySns.NameTextStyle = _Oggy_PluginParameters['NameTextStyle'];
    _OggySns.TalkTextStyle = _Oggy_PluginParameters['TalkTextStyle'];
    _OggySns.ChoiceTextStyle = _Oggy_PluginParameters['ChoiceTextStyle'];
    _OggySns.SkipModeSwitchId = _Oggy_PluginParameters['SkipModeSwitchId'];
    _OggySns.PauseSnsSwitchId = _Oggy_PluginParameters['PauseSnsSwitchId'];
    _OggySns.DisableSnsSwitchId = _Oggy_PluginParameters['DisableSnsSwitchId'];
    _OggySns.PlayerFaceImage = _Oggy_PluginParameters['PlayerFaceImage'];
    _OggySns.PlayerFaceVariableId = _Oggy_PluginParameters['PlayerFaceVariableId'];
    _OggySns.NewTalkSoundParam = _Oggy_PluginParameters['NewTalkSoundParam'];
    _OggySns.ShowChoiceSoundParam = _Oggy_PluginParameters['ShowChoiceSoundParam'];
    _OggySns.DecideChoiceSoundParam = _Oggy_PluginParameters['DecideChoiceSoundParam'];
    _OggySns.StampImageSize = _Oggy_PluginParameters['StampImageSize'];
    _OggySns.PictureThumbnailImageSize = _Oggy_PluginParameters['PictureThumbnailImageSize'];
    _OggySns.DebugSnsEventTest = _Oggy_PluginParameters['DebugSnsEventTest'];
    _OggySns.DebugEventTestBgGray = _Oggy_PluginParameters['DebugEventTestBgGray'];

    // var _Oggy_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    // Game_Interpreter.prototype.pluginCommand = function (command, args) {
    //     _Oggy_Game_Interpreter_pluginCommand.apply(this, arguments);
    //     if (command.toLowerCase() === 'startatsutalkevent') {
    //         var commonEventId = Number(args[0]);
    //         SceneManager.currentScene()._atsuTalkService.startAtsuTalkEvent(commonEventId);
    //     } else if (command.toLowerCase() === 'clearatsutalkhistory') {
    //         var commonEventId = Number(args[0]);
    //         $gameSystem._record.clearAllRecord();
    //         // SceneManager.currentScene()._atsuTalkService.clear();
    //     } else if (command.toLowerCase() === 'changetalkroom') {
    //         var roomId = Number(args[0]);
    //         $gameSystem._record.changeRoomId(roomId);
    //     } else if (command.toLowerCase() === 'changetalkroomvar') {
    //         var variableId = Number(args[0]);
    //         var roomId = $gameVariables.value(variableId);
    //         $gameSystem._record.changeRoomId(roomId);
    //     }
    // };
})();

PluginManager.registerCommand(pluginName, "startatsutalkevent", function (args) {
    var commonEventId = Number(args.commonEvewntId);
    SceneManager.currentScene()._atsuTalkService.startAtsuTalkEvent(commonEventId);
});

PluginManager.registerCommand(pluginName, "ClearAtsuTalkLog", function (args) {
    $gameSystem._record.clearAllRecord();
});

PluginManager.registerCommand(pluginName, "ChangeTalkRoom", function (args) {
    var roomId = Number(args.roomNumber);
    $gameSystem._record.changeRoomId(roomId);
});

PluginManager.registerCommand(pluginName, "ChangeTalkRoomVar", function (args) {
    var variableId = Number(args.roomNumberVariableId);
    var roomId = $gameVariables.value(variableId);
    $gameSystem._record.changeRoomId(roomId);
});

function Game_TaskList() {
    this.initialize.apply(this, arguments);
};

Game_TaskList.prototype.initialize = function () {
    this.reset(new Point(0, 0));
};

Game_TaskList.prototype.reset = function (origin) {
    this._tasks = [];
    this._origin = origin.clone();
    this._size = [1, 1]
    this._alpha = 0.0;
    this._params = [0];
};

Game_TaskList.prototype.clear = function () {
    this._tasks = [];
};

Game_TaskList.prototype.isBusy = function () {
    return this._tasks.length !== 0;
};

Game_TaskList.prototype.update = function () {
    if (!this.isBusy()) {
        return;
    }

    for (var i = 0; i < this._tasks.length;) {
        var task = this._tasks[i];
        var deltaFrame = 1;//SceneManager.deltaFrame();
        task.duration = Math.max(task.duration - deltaFrame, 0);
        var t = task.duration / task.maxDuration;

        // easing
        //t = (1 - (1-t)*(1-t));
        t = t * t;

        var bBreak = false;
        switch (task.type) {
            case "move":
                this._origin.x = task.a.x * t + task.b.x * (1 - t);
                this._origin.y = task.a.y * t + task.b.y * (1 - t);
                break;

            case "scale":
                this._size[0] = task.a[0] * t + task.b[0] * (1 - t);
                this._size[1] = task.a[1] * t + task.b[1] * (1 - t);
                break;

            case "fade":
                this._alpha = task.a * t + task.b * (1 - t);
                break;

            case "shake":
                this._origin.x = task.duration === 0
                    ? task.a.x
                    : task.a.x + task.power.x * (Math.random() - 0.5);
                this._origin.y = task.duration === 0
                    ? task.a.y
                    : task.a.y + task.power.y * (Math.random() - 0.5);
                break;

            case "wait":
                bBreak = true;
                break;

            case "param1":
                this._params[0] = task.a * t + task.b * (1 - t);
                break;
        }

        if (task.duration === 0) {
            this._tasks.splice(i, 1);
        } else {
            ++i;
        }

        if (bBreak) {
            break;
        }
    }
};

Game_TaskList.prototype.origin = function () {
    return this._origin;
};

Game_TaskList.prototype.alpha = function () {
    return this._alpha;
};

Game_TaskList.prototype.param = function (idx) {
    return this._params[idx];
};

Game_TaskList.prototype.size = function () {
    return this._size;
};

Game_TaskList.prototype.warp = function (pos) {
    this._origin = pos.clone();
};

Game_TaskList.prototype.move = function (duration, a, b) {
    this._tasks.push({ type: "move", maxDuration: duration, duration: duration, a: a.clone(), b: b.clone() });
};

Game_TaskList.prototype.scale = function (duration, a, b) {
    this._tasks.push({ type: "scale", maxDuration: duration, duration: duration, a: a.clone(), b: b.clone() });
};

Game_TaskList.prototype.wait = function (duration) {
    this._tasks.push({ type: "wait", maxDuration: duration, duration: duration });
};

Game_TaskList.prototype.fade = function (duration, a, b) {
    this._tasks.push({ type: "fade", maxDuration: duration, duration: duration, a: a, b: b });
};

Game_TaskList.prototype.shake = function (duration, a, power) {
    this._tasks.push({ type: "shake", maxDuration: duration, duration: duration, a: a.clone(), power: power.clone() });
};

Game_TaskList.prototype.paramFade = function (idx, duration, a, b) {
    this._tasks.push({ type: "param" + (idx + 1), maxDuration: duration, duration: duration, a: a, b: b });
};

// ----------------------------
// Node_Base
// ----------------------------
function Node_Base() {
    this.initialize.apply(this, arguments);
};

Node_Base.prototype.initialize = function (w, h, params, layerCount) {
    this._selectSprite = null;
    this._spriteContainer = new PIXI.Container();
    this._contentsSprites = [];
    this._backgroundSprite = null;
    this._animationSprite = null;
    this._isLoadCompleted = false;
    this._refreshRequested = false;
    this._twincleAnimCount = 0;
    this._tasks = new Game_TaskList();
    this._isLowerPanel = params.contains("lower");
    this._isSelectable = params.contains("selectable");
    this._isBackground = params.contains("background");
    this._isButton = params.contains("button");
    this._isAnimation = params.contains("animation");
    this._animationId = 0;
    this._isAnimLoop = false;
    this._width = w;
    this._height = h;
    this._isTerminateReserved = false;
    this._isFullScreenTouchRegion = false;
    this._layerCount = layerCount || 1;
    this._isEnabled = false;

    // button param
    this._touching = false;
    this._clickHandler = null;
    this._isTouchEnabled = false;

    if (this._isBackground) {
        this._backgroundSprite = this._createBackgroundSprite(w, h);
        this._spriteContainer.addChild(this._backgroundSprite);
    }
    if (this._isSelectable) {
        this._selectSprite = this._createSelectSprite(w, h);
        this._spriteContainer.addChild(this._selectSprite);
    }
    if (this._isAnimation) {
        this._animationSprite = new Sprite_Base();
        this._spriteContainer.addChild(this._animationSprite);
    }
    for (var i = 0; i < this._layerCount; ++i) {
        this._contentsSprites[i] = this._createContents(i, w, h);
        this._spriteContainer.addChild(this._contentsSprites[i]);
    }

};

Node_Base.prototype.x = function () {
    return this._spriteContainer.x;
};

Node_Base.prototype.y = function () {
    return this._spriteContainer.y;
};

Node_Base.prototype.width = function () {
    return this._width;
};

Node_Base.prototype.height = function () {
    return this._height;
};

Node_Base.prototype.create = function (x, y) {
    if (this._isEnabled) {
        this.terminate();
    }
    var targetLayer = this._isLowerPanel
        ? SceneManager.lowerWindowLayer()
        : SceneManager.upperWindowLayer();
    targetLayer.addChild(this._spriteContainer);

    if (this._selectSprite) {
        this._selectSprite.visible = false;// initial state is not select
    }
    for (var i = 0; i < this._layerCount; ++i) {
        this._contentsSprites[i].visible = true;
    }
    this._tasks.reset(new Point(x, y));
    this._isTouchEnabled = false;
    this._isTerminateReserved = false;

    var origin = this._tasks.origin();
    this._spriteContainer.x = origin.x;
    this._spriteContainer.y = origin.y;
    this._animationId = 0;
    this._isAnimLoop = false;
    this._isEnabled = true;

    this.refresh();
};

Node_Base.prototype.terminate = function () {
    if (!this._isEnabled) {
        return;
    }

    var targetLayer = this._isLowerPanel
        ? SceneManager.lowerWindowLayer()
        : SceneManager.upperWindowLayer();
    targetLayer.removeChild(this._spriteContainer);

    this._tasks.clear();
    this._isLoadCompleted = false;
    this._isTouchEnabled = false;
    this._isTerminateReserved = false;
    this._animationId = 0;
    this._isAnimLoop = false;
    this._isAutoRemove = true;
    this._isEnabled = false;
};

Node_Base.prototype.updateInput = function () {
    if (this._isButton) {
        this._processTouch();
    }
};

Node_Base.prototype.update = function () {
    if (!this._isLoadCompleted) {
        if (this._isResourceReady()) {
            this._refreshRequested = true;
            this._isLoadCompleted = true;
        }
    }

    if (this._spriteContainer == null) {
        // not created
        return;
    }

    if (this._selectSprite && this._selectSprite.visible) {
        this._twincleAnimCount = (this._twincleAnimCount + 1) % 40;
        if (this._twincleAnimCount < 20) {
            this._selectSprite.opacity = 255 - this._twincleAnimCount * 8;
        } else {
            this._selectSprite.opacity = 255 - (40 - this._twincleAnimCount) * 8;
        }
    }

    this._tasks.update();
    var origin = this._tasks.origin();
    this._spriteContainer.x = origin.x;
    this._spriteContainer.y = origin.y;
    var alpha = this._tasks.alpha();
    for (var i = 0; i < this._layerCount; ++i) {
        this._contentsSprites[i].opacity = (1 - alpha) * 255;
    }
    if (this._isBackground) {
        this._backgroundSprite.opacity = (1 - alpha) * 255;
    }
    var scale = this._tasks.size();
    this._spriteContainer.scale.x = scale[0];
    this._spriteContainer.scale.y = scale[1];

    if (this._refreshRequested) {
        for (var i = 0; i < this._layerCount; ++i) {
            this._refresh(i);
        }
        this._refreshRequested = false;
    }

    if (this._isAnimation) {
        this._updateAnimation();
    }

    if (this._isTerminateReserved && !this._tasks.isBusy()) {
        this.terminate();
    }
};

Node_Base.prototype.setVisible = function (visible) {
    if (this._spriteContainer) {
        this._spriteContainer.visible = visible;
    }
};

Node_Base.prototype.setAnchor = function (x, y) {
    if (this._spriteContainer) {
        for (var i = 0; i < this._layerCount; ++i) {
            this._contentsSprites[i].anchor.set(x, y);
        }
        if (this._selectSprite) {
            this._selectSprite.anchor.set(x, y);
        }
        if (this._backgroundSprite) {
            this._backgroundSprite.anchor.set(x, y);
        }
    }
};

Node_Base.prototype.setTouchRegion = function (region) {
    if (region === null) {
        this._touchRegion = null;
    } else {
        this._touchRegion = region.clone();
    }
};

Node_Base.prototype.setIsFullScreenTouchRegion = function (isFullScreenTouchRegion) {
    this._isFullScreenTouchRegion = isFullScreenTouchRegion;
};

Node_Base.prototype.refresh = function () {
    this._refreshRequested = true;
};

Node_Base.prototype.select = function () {
    if (this._selectSprite && !this._selectSprite.visible) {
        this._selectSprite.visible = true;
        this._twincleAnimCount = 0;
    }
};

Node_Base.prototype.deselect = function () {
    if (this._selectSprite) {
        this._selectSprite.visible = false;
    }
};

Node_Base.prototype.isSelected = function () {
    return this._selectSprite.visible;
};

Node_Base.prototype.isBusy = function () {
    return this._tasks.isBusy();
};

Node_Base.prototype.tasks = function () {
    return this._tasks;
};

Node_Base.prototype.isTouching = function () {
    return this._touching;
};

Node_Base.prototype.setIsTouchEnabled = function (isTouchEnabled) {
    this._isTouchEnabled = isTouchEnabled;
};

Node_Base.prototype.setClickHandler = function (method) {
    this._clickHandler = method;
};

Node_Base.prototype.startAnimation = function (animationId, isLoop, isAutoRemove) {

    this._animationId = animationId;
    this._isAnimLoop = isLoop;
    this._isAutoRemove = isAutoRemove;
    if (!this._isAnimLoop) {
        var animation = $dataAnimations[this._animationId];
        this._animationSprite.startAnimation(animation, false, 0);
    }
};

Node_Base.prototype.isAnimationPlaying = function () {
    if (this._isAnimation) {
        if (this._isAutoRemove) {
            return this._animationSprite.isAnimationPlaying();
        } else {
            var sprites = this._animationSprite._animationSprites;
            for (var i = 0; i < sprites.length; i++) {
                var sprite = sprites[i];
                if (sprite.isPlaying()) {
                    return true;
                }
            }
            return false;
        }
    } else {
        return false;
    }
};

Node_Base.prototype.stopAnimation = function () {
    this._animationId = 0;
    this._isAnimLoop = false;
};

Node_Base.prototype._createContents = function (layerIndex, w, h) {
    var sprite = new Sprite();
    sprite.bitmap = new Bitmap(w, h);
    sprite.setFrame(0, 0, w, h);
    return sprite;
};

Node_Base.prototype._createBackgroundSprite = function (w, h) {
    var sprite = new Sprite();
    sprite.bitmap = new Bitmap(1, 1);
    sprite.bitmap.fillAll("rgba(70, 70, 70, 0.5)");
    sprite.setFrame(0, 0, 1, 1);
    sprite.scale.x = w;
    sprite.scale.y = h;
    return sprite;
};

Node_Base.prototype._createSelectSprite = function (w, h) {
    var sprite = new Sprite();
    sprite.bitmap = ImageManager.loadSystem("Window");// system resource is resident
    sprite.setFrame(96, 96, 48, 48);
    sprite.scale.x = w / 48;
    sprite.scale.y = h / 48;
    return sprite;
};

Node_Base.prototype._refresh = function () {
    // nothing
};

Node_Base.prototype._isResourceReady = function () {
    return false;
};

Node_Base.prototype._processTouch = function () {
    if (this._isTouchEnabled) {

        if (!this._touching) {
            if (TouchInput.isTriggered() && this._isButtonTouched()) {
                this._touching = true;
                if (this._clickHandler) {
                    if (this._clickHandler()) {
                        TouchInput._triggered = false;
                        TouchInput._cancelled = false;
                        TouchInput._released = false;
                        TouchInput._wheelTriggered = false;
                        TouchInput._doubleTriggered = false;
                    }
                }
            }
        }

        if (this._touching) {
            if (TouchInput.isReleased() || !this._isButtonTouched()) {
                this._touching = false;
            }
        }
    } else {
        this._touching = false;
    }
};

Node_Base.prototype._isButtonTouched = function () {
    // canvasToLocal
    if (this._isFullScreenTouchRegion) {
        return true;
    } else if (this._touchRegion == null) {
        var baseSprite = this._selectSprite ? this._selectSprite : this._contentsSprites[0];
        var x = TouchInput.x - this._tasks.origin().x + baseSprite.anchor.x * this._width;
        var y = TouchInput.y - this._tasks.origin().y + baseSprite.anchor.y * this._height;
        return x >= 0 && y >= 0 && x < this._width && y < this._height;
    } else {
        var x = TouchInput.x - this._spriteContainer.x - this._touchRegion[0];
        var y = TouchInput.y - this._spriteContainer.y - this._touchRegion[1];
        return x >= 0 && y >= 0 && x < this._touchRegion[2] && y < this._touchRegion[3];
    }
};

Node_Base.prototype._updateAnimation = function (isLoop) {
    if (this._animationSprite.isAnimationPlaying()) {
        if (this._isAutoRemove) {
            this._animationSprite.update();
        }
        for (var i = 0; i < this._animationSprite._animationSprites.length; i++) {
            var sprite = this._animationSprite._animationSprites[i];
            sprite.update();
        }
    } else if (this._isAnimLoop) {
        if (Graphics.frameCount % 40 === 0) {
            var animation = $dataAnimations[this._animationId];
            this._animationSprite.startAnimation(animation, false, 0);
        }
    }

};

function Node_ImageButton() {
    this.initialize.apply(this, arguments);
};

Node_ImageButton.prototype = Object.create(Node_Base.prototype);
Node_ImageButton.prototype.constructor = Node_ImageButton;

Node_ImageButton.prototype.initialize = function (bitmap, frame) {
    this._bitmap = bitmap;
    this._frame = frame;
    Node_Base.prototype.initialize.call(this, frame[2], frame[3], ["upper", "button"]);
};

Node_ImageButton.prototype.create = function (x, y) {
    Node_Base.prototype.create.call(this, x, y);
    this._isTouched = false;
    this._flashTimer = 0;
    //this._contentsSprites[0].tint = 0xffffff00;
};

Node_ImageButton.prototype.update = function () {
    // update frame
    if (!this._isTouched) {
        if (this._touching) {
            this._isTouched = true;
            this._flashTimer = 16;
        }
    } else if (this._flashTimer > 0) {
        // touch animation
        var sprite = this._contentsSprites[0];
        var brightness = Math.min(0xff, (this._flashTimer % 8) * 24);
        //sprite.tint = (0xffffff << 8) | brightness;
        this._flashTimer--;
    }

    Node_Base.prototype.update.call(this);
};

Node_ImageButton.prototype.resetTouch = function () {
    this._isTouched = false;
};

Node_ImageButton.prototype._createContents = function (layerIndex, w, h) {
    //var sprite = new ShaderSprite(_Oggy_ShaderSprite_ImageButton);
    var sprite = new Sprite();
    sprite.bitmap = this._bitmap;
    sprite.setFrame(this._frame[0], this._frame[1], this._frame[2], this._frame[3]);
    return sprite;
};

Node_ImageButton.createSystemImageButton = function (name, frame) {
    return new Node_ImageButton(ImageManager.loadSystem(name), frame);
};

Node_ImageButton.createPictureImageButton = function (name, frame) {
    return new Node_ImageButton(ImageManager.loadPicture(name), frame);
};

function Node_Picture() {
    this.initialize.apply(this, arguments);
};

Node_Picture.prototype = Object.create(Node_Base.prototype);
Node_Picture.prototype.constructor = Node_Picture;

Node_Picture.prototype.initialize = function (bitmap, frame, isLowerLayer) {
    this._bitmap = bitmap;
    this._frame = frame;
    var isLowerLayer = isLowerLayer || false;
    if (isLowerLayer) {
        Node_Base.prototype.initialize.call(this, frame[2], frame[3], ["lower"]);
    } else {
        Node_Base.prototype.initialize.call(this, frame[2], frame[3], ["upper"]);
    }

};

Node_Picture.prototype.create = function (x, y) {
    Node_Base.prototype.create.call(this, x, y);
};

Node_Picture.prototype._createContents = function (layerIndex, w, h) {
    var sprite = new Sprite();
    sprite.bitmap = this._bitmap;
    sprite.setFrame(this._frame[0], this._frame[1], this._frame[2], this._frame[3]);
    return sprite;
};

Node_Picture.createPicture = function (name, frame, isLowerLayer) {
    return new Node_Picture(ImageManager.loadPicture(name), frame, isLowerLayer);
};


(function () {
    var _Oggy_Bitmap_initialize = Bitmap.prototype.initialize;
    Bitmap.prototype.initialize = function (width, height) {
        _Oggy_Bitmap_initialize.apply(this, arguments);
        this.fontBold = false;
    };

    var _Oggy_Bitmap_makeFontNameText = Bitmap.prototype._makeFontNameText;
    Bitmap.prototype._makeFontNameText = function () {
        return (this.fontBold ? 'Bold ' : '') +
            _Oggy_Bitmap_makeFontNameText.apply(this);
    };
})();
var Text = {};
Text.initialize = function () {
    this._windowSkinBitmap = ImageManager.loadSystem('Window');
};

Text.drawText = function (contents, text, x, y, w, h, defaultStyle) {
    // make text groups
    var textGroups = [{ text: "", color: defaultStyle.TextColor, isBold: defaultStyle.IsBold, outlineColor: defaultStyle.OutlineColor, outlineWidth: defaultStyle.OutlineWidth }];
    var textState = { text: text, index: 0 };
    while (textState.index < textState.text.length) {
        this._processCharacter(textState, textGroups);
    }

    // draw text
    var allText = textGroups.reduce(function (r, g) { return r + g.text; }, "");
    var realWidth = contents.measureTextWidth(allText);
    var drawScaleX = Math.min(w / realWidth, 1.0);
    for (var i = 0; i < textGroups.length; ++i) {
        var group = textGroups[i];
        var subRealWidth = contents.measureTextWidth(group.text);
        var subWidth = Math.floor(subRealWidth * drawScaleX);
        contents.textColor = this._textColor(group.color);
        contents.fontBold = group.isBold;
        contents.outlineWidth = group.outlineWidth;
        if (group.outlineWidth > 0) {
            contents.outlineColor = this._textColor(group.outlineColor);
        } else {
            // Despite of zero outline width, outline color bleeds slightly.
            // So we set transparent color
            contents.outlineColor = "rgba(0, 0, 0, 0)"
        }

        contents.drawText(group.text, x, y, subWidth, h);
        x += subWidth;
    }
};

Text._processCharacter = function (textState, outTextGroups) {
    switch (textState.text[textState.index]) {
        case '\x1b':
            this._processEscapeCharacter(this._obtainEscapeCode(textState), textState, outTextGroups);
            break;
        default:
            this._processNormalCharacter(textState, outTextGroups);
            break;
    }
};

Text._obtainEscapeCode = function (textState) {
    textState.index++;
    var regExp = /^[\$\.\|\^!><\{\}\\]|^[A-Z]+/i;
    var arr = regExp.exec(textState.text.slice(textState.index));
    if (arr) {
        textState.index += arr[0].length;
        return arr[0].toUpperCase();
    } else {
        return '';
    }
};

Text._obtainEscapeParam = function (textState) {
    var arr = /^\[\d+\]/.exec(textState.text.slice(textState.index));
    if (arr) {
        textState.index += arr[0].length;
        return parseInt(arr[0].slice(1));
    } else {
        return '';
    }
};

Text._processEscapeCharacter = function (code, textState, outTextGroups) {
    switch (code) {
        case 'C':
            var newTextGroup = Utils.clone(outTextGroups[outTextGroups.length - 1]);
            newTextGroup.color = this._obtainEscapeParam(textState);
            newTextGroup.text = "";
            outTextGroups.push(newTextGroup);
            break;

        case 'B':
            var newTextGroup = Utils.clone(outTextGroups[outTextGroups.length - 1]);
            newTextGroup.isBold = this._obtainEscapeParam(textState) === 1;
            newTextGroup.text = "";
            outTextGroups.push(newTextGroup);
            break;
    }
};

Text._processNormalCharacter = function (textState, outTextGroups) {
    var c = textState.text[textState.index++];
    var lastTextGroup = outTextGroups[outTextGroups.length - 1];
    lastTextGroup.text += c;
};

Text._textColor = function (n) {
    var px = 96 + (n % 8) * 12 + 6;
    var py = 144 + Math.floor(n / 8) * 12 + 6;
    return this._windowSkinBitmap.getPixel(px, py);
};


(function () {

    SoundManager.playAtsuTalkSound = function () {
        var param = _OggySns.NewTalkSoundParam;
        if (param.File) {
            AudioManager.playStaticSe({ name: param.File, volume: param.Volume, pitch: param.Pitch, pan: 0 });
        }
    };

    SoundManager.playShowChoiceSound = function () {
        var param = _OggySns.ShowChoiceSoundParam;
        if (param.File) {
            AudioManager.playStaticSe({ name: param.File, volume: param.Volume, pitch: param.Pitch, pan: 0 });
        }
    };

    SoundManager.playDecideChoiceSound = function () {
        var param = _OggySns.DecideChoiceSoundParam;
        if (param.File) {
            AudioManager.playStaticSe({ name: param.File, volume: param.Volume, pitch: param.Pitch, pan: 0 });
        }
    };

    SoundManager.playStaticSe = function (name, volume, pitch, pan) {
        AudioManager.playStaticSe({ name: name, volume: volume, pitch: pitch, pan: pan });
    };

    SoundManager.playSe = function (name, volume, pitch, pan) {
        AudioManager.playSe({ name: name, volume: volume, pitch: pitch, pan: pan });
    };

    SoundManager.stopStaticSe = function (name) {
        for (var i = 0; i < AudioManager._staticBuffers.length; i++) {
            var buffer = AudioManager._staticBuffers[i];
            if (buffer._reservedSeName === name) {
                buffer.stop();
                break;
            }
        }
    };
})();

function Game_AtsuTalkInterpreter() {
    this.initialize.apply(this, arguments);
};

Game_AtsuTalkInterpreter.prototype = Object.create(Game_Interpreter.prototype);
Game_AtsuTalkInterpreter.prototype.constructor = Game_AtsuTalkInterpreter;

Game_AtsuTalkInterpreter.prototype.initialize = function () {
    Game_Interpreter.prototype.initialize.call(this);
};

// Game_AtsuTalkInterpreter.prototype.command101 = function () {
//     if (!$gameMessage.isBusy()) {
//         $gameSystem._isAtsutalkMessage = true;
//         if (!$gameSwitches.value(_OggySns.SkipModeSwitchId)) {
//             SoundManager.playAtsuTalkSound();
//         }
//         var faceImageName = this._params[0];
//         var faceImageIndex = this._params[1];
//         var positionType = this._params[3];
//         var texts = [];
//         while (this.nextEventCode() === 401) {  // Text data
//             this._index++;
//             if (texts.length > 0) {
//                 $gameMessage.add(this.currentCommand().parameters[0]);// for atsumaru comment
//             }
//             texts.push(this.currentCommand().parameters[0]);
//         }
//         this._index++;

//         var timestamp = 0;
//         if (Entity_AtsuTalk.needTimestamp(texts)) {
//             timestamp = Date.now();
//         }
//         var entity = new Entity_AtsuTalk(faceImageName, faceImageIndex, positionType, texts, timestamp);
//         SceneManager.currentScene()._atsuTalkService.addAtsuTalk(entity);
//         this.setWaitMode('talk');
//     }
//     return false;
// };

Game_AtsuTalkInterpreter.prototype.command101 = function (params) {
    if (!$gameMessage.isBusy()) {
        $gameSystem._isAtsutalkMessage = true;
        if (!$gameSwitches.value(_OggySns.SkipModeSwitchId)) {
            SoundManager.playAtsuTalkSound();
        }
        var faceImageName = params[0];
        var faceImageIndex = params[1];
        var positionType = params[3];
        var texts = [];
        while (this.nextEventCode() === 401) {  // Text data
            this._index++;
            if (texts.length > 0) {
                $gameMessage.add(this.currentCommand().parameters[0]);// for atsumaru comment
            }
            texts.push(this.currentCommand().parameters[0]);
        }
        this._index++;

        var timestamp = 0;
        if (Entity_AtsuTalk.needTimestamp(texts)) {
            timestamp = Date.now();
        }
        var entity = new Entity_AtsuTalk(faceImageName, faceImageIndex, positionType, texts, timestamp);
        SceneManager.currentScene()._atsuTalkService.addAtsuTalk(entity);
        this.setWaitMode('talk');
    }
    return false;
};

// Game_AtsuTalkInterpreter.prototype.command102 = function () {
//     if (!$gameMessage.isBusy()) {
//         SoundManager.playShowChoiceSound();
//         var choices = this._params[0].clone();
//         SceneManager.currentScene()._atsuTalkService.addChoice(choices, function (n) {
//             this._branch[this._indent] = n;
//         }.bind(this));
//         this._index++;
//         this.setWaitMode('choice');
//     }
//     return false;
// };

// munokura start
Game_AtsuTalkInterpreter.prototype.command102 = function (params) {
    if (!$gameMessage.isBusy()) {
        SoundManager.playShowChoiceSound();
        var choices = params[0].clone();
        SceneManager.currentScene()._atsuTalkService.addChoice(choices, function (n) {
            this._branch[this._indent] = n;
        }.bind(this));
        this._index++;
        this.setWaitMode('choice');
    }
    return false;
};
// munokura end

// Conditional Branch
// Game_AtsuTalkInterpreter.prototype.command111 = function () {
//     var result = Game_Interpreter.prototype.command111.call(this);
//     var choiceIndex = this._branch[this._indent] ? 0 : 1;
//     var talkRoomRecord = $gameSystem._record.getCurrentTalkRoomRecord();
//     talkRoomRecord.addChoiceResult(choiceIndex);
//     return result;
// };

// munokura start
Game_AtsuTalkInterpreter.prototype.command111 = function (params) {
    var result = Game_Interpreter.prototype.command111.call(this, params);
    var choiceIndex = this._branch[this._indent] ? 0 : 1;
    var talkRoomRecord = $gameSystem._record.getCurrentTalkRoomRecord();
    talkRoomRecord.addChoiceResult(choiceIndex);
    return result;
};
// munokura end

Game_AtsuTalkInterpreter.prototype.updateWaitMode = function () {
    var waiting = false;
    switch (this._waitMode) {
        case 'switch':
            waiting = $gameSwitches.value(this._waitForSwitch_switchId) !== this._waitForSwitch_value;
            break;

        case 'input':
            waiting = !(TouchInput.isTriggered() || Input.isTriggered("ok"));
            break;

        case 'talk':
            waiting = !(TouchInput.isTriggered() || Input.isTriggered("ok"));
            if (waiting && $gameSwitches.value(_OggySns.SkipModeSwitchId)) {
                waiting = false;
            }
            if (!waiting && !SceneManager.currentScene()._atsuTalkService.isPageScrolling()) {
                waiting = true;
            }
            break;

        case 'choice':
            waiting = SceneManager.currentScene()._atsuTalkService.isChoiceBusy();
            break;

        default:
            waiting = Game_Interpreter.prototype.updateWaitMode.apply(this, arguments);
            break;
    }

    if (!waiting) {
        this._waitMode = '';
    }
    return waiting;
};

Game_AtsuTalkInterpreter.prototype.terminate = function () {
    Game_Interpreter.prototype.terminate.call(this);
    SceneManager.currentScene()._atsuTalkService.endAtsuTalkEvent();
};



function Game_RecordInterpreter() {
    this.initialize.apply(this, arguments);
};

Game_RecordInterpreter.prototype.initialize = function () {
    this._depth = 0;
    this.clear();
    this._branch = {};
    this._params = [];
    this._indent = 0;
};

Game_RecordInterpreter.prototype.clear = function () {
    this._list = null;
    this._index = 0;
    this._comments = '';
    this._entities = [];
    this._record = [];
};

Game_RecordInterpreter.prototype.setup = function (list, entities, record) {
    this.clear();
    this._list = list;
    this._entities = entities;
    this._record = [].concat(record);
};

Game_RecordInterpreter.prototype.isRunning = function () {
    return !!this._list;
};

Game_RecordInterpreter.prototype.update = function () {
    while (this.isRunning()) {
        this.executeCommand();
    }
};

Game_RecordInterpreter.prototype.executeCommand = function () {
    var command = this.currentCommand();
    if (command) {
        this._params = command.parameters;
        this._indent = command.indent;
        var methodName = 'command' + command.code;
        if (typeof this[methodName] === 'function') {
            if (!this[methodName]()) {
                return false;
            }
        }
        this._index++;
    } else {
        this.terminate();
    }
    return true;
};

Game_RecordInterpreter.prototype.terminate = function () {
    this._list = null;
    this._comments = '';
};

Game_RecordInterpreter.prototype.skipBranch = function () {
    while (this._list[this._index + 1].indent > this._indent) {
        this._index++;
    }
};

Game_RecordInterpreter.prototype.currentCommand = function () {
    return this._list[this._index];
};

Game_RecordInterpreter.prototype.nextEventCode = function () {
    var command = this._list[this._index + 1];
    if (command) {
        return command.code;
    } else {
        return 0;
    }
};

// Show Text
Game_RecordInterpreter.prototype.command101 = function () {
    var faceImageName = this._params[0];
    var faceImageIndex = this._params[1];
    var positionType = this._params[3];
    var texts = [];
    while (this.nextEventCode() === 401) {  // Text data
        this._index++;
        texts.push(this.currentCommand().parameters[0]);
    }
    this._index++;

    var timestamp = 0;
    if (Entity_AtsuTalk.needTimestamp(texts)) {
        if (!Entity_TalkRoomRecord.isChoiceIndex(this._record[0])) {
            var rec = this._record.shift();
            timestamp = rec;
        }
    }

    var entity = new Entity_AtsuTalk(faceImageName, faceImageIndex, positionType, texts, timestamp);
    this._entities.push(entity);
    return false;
};

// munokura start
// Game_RecordInterpreter.prototype.command101 = function (params) {
//     var faceImageName = params[0];
//     var faceImageIndex = params[1];
//     var positionType = params[3];
//     var texts = [];
//     while (this.nextEventCode() === 401) {  // Text data
//         this._index++;
//         texts.push(this.currentCommand().parameters[0]);
//     }
//     this._index++;

//     var timestamp = 0;
//     if (Entity_AtsuTalk.needTimestamp(texts)) {
//         if (!Entity_TalkRoomRecord.isChoiceIndex(this._record[0])) {
//             var rec = this._record.shift();
//             timestamp = rec;
//         }
//     }

//     var entity = new Entity_AtsuTalk(faceImageName, faceImageIndex, positionType, texts, timestamp);
//     this._entities.push(entity);
//     return false;
// };
// munokura end

// Show Choices
// Game_RecordInterpreter.prototype.command102 = function () {
Game_RecordInterpreter.prototype.command102 = function (params) {
    var choiceIndex = 0;
    while (this._record.length > 0) {
        var rec = this._record.shift();
        if (Entity_TalkRoomRecord.isChoiceIndex(rec)) {
            choiceIndex = rec;
            break;
        } else {
            // do nothing
        }
    }

    this._branch[this._indent] = choiceIndex;
    this._index++;
    return false;
};

// When [**]
// Game_RecordInterpreter.prototype.command402 = function () {
//     if (this._branch[this._indent] !== this._params[0]) {
//         this.skipBranch();
//     }
//     return true;
// };

// munokura start
Game_RecordInterpreter.prototype.command402 = function (params) {
    return true;
};
// munokura end

// When Cancel
Game_RecordInterpreter.prototype.command403 = function () {
    if (this._branch[this._indent] >= 0) {
        this.skipBranch();
    }
    return true;
};

// Input Number
// Game_RecordInterpreter.prototype.command103 = function () {
Game_RecordInterpreter.prototype.command103 = function (params) {
    this._index++;
    return false;
};

// Select Item
// Game_RecordInterpreter.prototype.command104 = function () {
Game_RecordInterpreter.prototype.command104 = function (params) {
    this._index++;
    return false;
};

// Show Scrolling Text
// Game_RecordInterpreter.prototype.command105 = function () {
Game_RecordInterpreter.prototype.command105 = function (params) {
    while (this.nextEventCode() === 405) {
        this._index++;
    }
    this._index++;
    return false;
};

// Comment
// Game_RecordInterpreter.prototype.command108 = function () {
Game_RecordInterpreter.prototype.command108 = function (params) {
    while (this.nextEventCode() === 408) {
        this._index++;
    }
    return true;
};

// Conditional Branch
// Game_RecordInterpreter.prototype.command111 = function () {
Game_RecordInterpreter.prototype.command111 = function (params) {
    var choiceIndex = 0;
    while (this._record.length > 0) {
        var rec = this._record.shift();
        if (Entity_TalkRoomRecord.isChoiceIndex(rec)) {
            choiceIndex = rec;
            break;
        } else {
            // do nothing
        }
    }

    this._branch[this._indent] = choiceIndex === 0;
    if (this._branch[this._indent] === false) {
        this.skipBranch();
    }
    return true;
};

// Else
Game_RecordInterpreter.prototype.command411 = function () {
    if (this._branch[this._indent] !== false) {
        this.skipBranch();
    }
    return true;
};

// Loop
Game_RecordInterpreter.prototype.command112 = function () {
    return true;
};

// Repeat Above
Game_RecordInterpreter.prototype.command413 = function () {
    do {
        this._index--;
    } while (this.currentCommand().indent !== this._indent);
    return true;
};

// Break Loop
Game_RecordInterpreter.prototype.command113 = function () {
    var depth = 0;
    while (this._index < this._list.length - 1) {
        this._index++;
        var command = this.currentCommand();

        if (command.code === 112)
            depth++;

        if (command.code === 413 && command.indent < this._indent) {
            if (depth > 0)
                depth--;
            else
                break;
        }
    }
    return true;
};

// Exit Event Processing
Game_RecordInterpreter.prototype.command115 = function () {
    this._index = this._list.length;
    return true;
};

// Common Event
// Game_RecordInterpreter.prototype.command117 = function () {
Game_RecordInterpreter.prototype.command117 = function (params) {
    return true;
};

// Label
Game_RecordInterpreter.prototype.command118 = function () {
    return true;
};

// Jump to Label
// Game_RecordInterpreter.prototype.command119 = function () {
//     var labelName = this._params[0];
//     for (var i = 0; i < this._list.length; i++) {
//         var command = this._list[i];
//         if (command.code === 118 && command.parameters[0] === labelName) {
//             this.jumpTo(i);
//             return;
//         }
//     }
// };

// munokura start
Game_RecordInterpreter.prototype.command119 = function (params) {
    var labelName = params[0];
    for (var i = 0; i < this._list.length; i++) {
        var command = this._list[i];
        if (command.code === 118 && command.parameters[0] === labelName) {
            this.jumpTo(i);
            return;
        }
    }
};

Game_RecordInterpreter.prototype.jumpTo = function (index) {
    var lastIndex = this._index;
    var startIndex = Math.min(index, lastIndex);
    var endIndex = Math.max(index, lastIndex);
    var indent = this._indent;
    for (var i = startIndex; i <= endIndex; i++) {
        var newIndent = this._list[i].indent;
        if (newIndent !== indent) {
            this._branch[indent] = null;
            indent = newIndent;
        }
    }
    this._index = index;
};

// Control Switches
// Game_RecordInterpreter.prototype.command121 = function () {
Game_RecordInterpreter.prototype.command121 = function (params) {
    return true;
};

// Control Variables
// Game_RecordInterpreter.prototype.command122 = function () {
Game_RecordInterpreter.prototype.command122 = function (params) {
    return true;
};

// Control Self Switch
// Game_RecordInterpreter.prototype.command123 = function () {
Game_RecordInterpreter.prototype.command123 = function (params) {
    return true;
};

// Control Timer
// Game_RecordInterpreter.prototype.command124 = function () {
Game_RecordInterpreter.prototype.command124 = function (params) {
    return true;
};

// Change Gold
// Game_RecordInterpreter.prototype.command125 = function () {
Game_RecordInterpreter.prototype.command125 = function (params) {
    return true;
};

// Change Items
// Game_RecordInterpreter.prototype.command126 = function () {
Game_RecordInterpreter.prototype.command126 = function (params) {
    return true;
};

// Change Weapons
// Game_RecordInterpreter.prototype.command127 = function () {
Game_RecordInterpreter.prototype.command127 = function (params) {
    return true;
};

// Change Armors
// Game_RecordInterpreter.prototype.command128 = function () {
Game_RecordInterpreter.prototype.command128 = function (params) {
    return true;
};

// Change Party Member
// Game_RecordInterpreter.prototype.command129 = function () {
Game_RecordInterpreter.prototype.command129 = function (params) {
    return true;
};

// Change Battle BGM
// Game_RecordInterpreter.prototype.command132 = function () {
Game_RecordInterpreter.prototype.command132 = function (params) {
    return true;
};

// Change Victory ME
// Game_RecordInterpreter.prototype.command133 = function () {
Game_RecordInterpreter.prototype.command133 = function (params) {
    return true;
};

// Change Save Access
// Game_RecordInterpreter.prototype.command134 = function () {
Game_RecordInterpreter.prototype.command134 = function (params) {
    return true;
};

// Change Menu Access
// Game_RecordInterpreter.prototype.command135 = function () {
Game_RecordInterpreter.prototype.command135 = function (params) {
    return true;
};

// Change Encounter Disable
// Game_RecordInterpreter.prototype.command136 = function () {
Game_RecordInterpreter.prototype.command136 = function (params) {
    return true;
};

// Change Formation Access
// Game_RecordInterpreter.prototype.command137 = function () {
Game_RecordInterpreter.prototype.command137 = function (params) {
    return true;
};

// Change Window Color
// Game_RecordInterpreter.prototype.command138 = function () {
Game_RecordInterpreter.prototype.command138 = function (params) {
    return true;
};

// Change Defeat ME
// Game_RecordInterpreter.prototype.command139 = function () {
Game_RecordInterpreter.prototype.command139 = function (params) {
    return true;
};

// Change Vehicle BGM
// Game_RecordInterpreter.prototype.command140 = function () {
Game_RecordInterpreter.prototype.command140 = function (params) {
    return true;
};

// Transfer Player
// Game_RecordInterpreter.prototype.command201 = function () {
Game_RecordInterpreter.prototype.command201 = function (params) {
    return true;
};

// Set Vehicle Location
// Game_RecordInterpreter.prototype.command202 = function () {
Game_RecordInterpreter.prototype.command202 = function (params) {
    return true;
};

// Set Event Location
// Game_RecordInterpreter.prototype.command203 = function () {
Game_RecordInterpreter.prototype.command203 = function (params) {
    return true;
};

// Scroll Map
// Game_RecordInterpreter.prototype.command204 = function () {
Game_RecordInterpreter.prototype.command204 = function (params) {
    return true;
};

// Set Movement Route
// Game_RecordInterpreter.prototype.command205 = function () {
Game_RecordInterpreter.prototype.command205 = function (params) {
    return true;
};

// Getting On and Off Vehicles
Game_RecordInterpreter.prototype.command206 = function () {
    return true;
};

// Change Transparency
// Game_RecordInterpreter.prototype.command211 = function () {
Game_RecordInterpreter.prototype.command211 = function (params) {
    return true;
};

// Show Animation
// Game_RecordInterpreter.prototype.command212 = function () {
Game_RecordInterpreter.prototype.command212 = function (params) {
    return true;
};

// Show Balloon Icon
// Game_RecordInterpreter.prototype.command213 = function () {
Game_RecordInterpreter.prototype.command213 = function (params) {
    return true;
};

// Erase Event
Game_RecordInterpreter.prototype.command214 = function () {
    return true;
};

// Change Player Followers
// Game_RecordInterpreter.prototype.command216 = function () {
Game_RecordInterpreter.prototype.command216 = function (params) {
    return true;
};

// Gather Followers
Game_RecordInterpreter.prototype.command217 = function () {
    return true;
};

// Fadeout Screen
Game_RecordInterpreter.prototype.command221 = function () {
    this._index++;
    return false;
};

// Fadein Screen
Game_RecordInterpreter.prototype.command222 = function () {
    this._index++;
    return false;
};

// Tint Screen
// Game_RecordInterpreter.prototype.command223 = function () {
Game_RecordInterpreter.prototype.command223 = function (params) {
    return true;
};

// Flash Screen
// Game_RecordInterpreter.prototype.command224 = function () {
Game_RecordInterpreter.prototype.command224 = function (params) {
    return true;
};

// Shake Screen
// Game_RecordInterpreter.prototype.command225 = function () {
Game_RecordInterpreter.prototype.command225 = function (params) {
    return true;
};

// Wait
// Game_RecordInterpreter.prototype.command230 = function () {
Game_RecordInterpreter.prototype.command230 = function (params) {
    return true;
};

// Show Picture
// Game_RecordInterpreter.prototype.command231 = function () {
Game_RecordInterpreter.prototype.command231 = function (params) {
    return true;
};

// Move Picture
// Game_RecordInterpreter.prototype.command232 = function () {
Game_RecordInterpreter.prototype.command232 = function (params) {
    return true;
};

// Rotate Picture
// Game_RecordInterpreter.prototype.command233 = function () {
Game_RecordInterpreter.prototype.command233 = function (params) {
    return true;
};

// Tint Picture
// Game_RecordInterpreter.prototype.command234 = function () {
Game_RecordInterpreter.prototype.command234 = function (params) {
    return true;
};

// Erase Picture
// Game_RecordInterpreter.prototype.command235 = function () {
Game_RecordInterpreter.prototype.command235 = function (params) {
    return true;
};

// Set Weather Effect
// Game_RecordInterpreter.prototype.command236 = function () {
Game_RecordInterpreter.prototype.command236 = function (params) {
    return true;
};

// Play BGM
// Game_RecordInterpreter.prototype.command241 = function () {
Game_RecordInterpreter.prototype.command241 = function (params) {
    return true;
};

// Fadeout BGM
// Game_RecordInterpreter.prototype.command242 = function () {
Game_RecordInterpreter.prototype.command242 = function (params) {
    return true;
};

// Save BGM
Game_RecordInterpreter.prototype.command243 = function () {
    return true;
};

// Resume BGM
Game_RecordInterpreter.prototype.command244 = function () {
    return true;
};

// Play BGS
// Game_RecordInterpreter.prototype.command245 = function () {
Game_RecordInterpreter.prototype.command245 = function (params) {
    return true;
};

// Fadeout BGS
// Game_RecordInterpreter.prototype.command246 = function () {
Game_RecordInterpreter.prototype.command246 = function (params) {
    return true;
};

// Play ME
// Game_RecordInterpreter.prototype.command249 = function () {
Game_RecordInterpreter.prototype.command249 = function (params) {
    return true;
};

// Play SE
// Game_RecordInterpreter.prototype.command250 = function () {
Game_RecordInterpreter.prototype.command250 = function (params) {
    return true;
};

// Stop SE
Game_RecordInterpreter.prototype.command251 = function () {
    return true;
};

// Play Movie
// Game_RecordInterpreter.prototype.command261 = function () {
Game_RecordInterpreter.prototype.command261 = function (params) {
    this._index++;
    return false;
};

// Change Map Name Display
// Game_RecordInterpreter.prototype.command281 = function () {
Game_RecordInterpreter.prototype.command281 = function (params) {
    return true;
};

// Change Tileset
// Game_RecordInterpreter.prototype.command282 = function () {
Game_RecordInterpreter.prototype.command282 = function (params) {
    return true;
};

// Change Battle Back
// Game_RecordInterpreter.prototype.command283 = function () {
Game_RecordInterpreter.prototype.command283 = function (params) {
    return true;
};

// Change Parallax
// Game_RecordInterpreter.prototype.command284 = function () {
Game_RecordInterpreter.prototype.command284 = function (params) {
    return true;
};

// Get Location Info
// Game_RecordInterpreter.prototype.command285 = function () {
Game_RecordInterpreter.prototype.command285 = function (params) {
    return true;
};

// Battle Processing
// Game_RecordInterpreter.prototype.command301 = function () {
Game_RecordInterpreter.prototype.command301 = function (params) {
    return true;
};

// If Win
Game_RecordInterpreter.prototype.command601 = function () {
    if (this._branch[this._indent] !== 0) {
        this.skipBranch();
    }
    return true;
};

// If Escape
Game_RecordInterpreter.prototype.command602 = function () {
    if (this._branch[this._indent] !== 1) {
        this.skipBranch();
    }
    return true;
};

// If Lose
Game_RecordInterpreter.prototype.command603 = function () {
    if (this._branch[this._indent] !== 2) {
        this.skipBranch();
    }
    return true;
};

// Shop Processing
// Game_RecordInterpreter.prototype.command302 = function () {
Game_RecordInterpreter.prototype.command302 = function (params) {
    this._index++;
    return true;
};

// Name Input Processing
// Game_RecordInterpreter.prototype.command303 = function () {
Game_RecordInterpreter.prototype.command303 = function (params) {
    return true;
};

// Change HP
// Game_RecordInterpreter.prototype.command311 = function () {
Game_RecordInterpreter.prototype.command311 = function (params) {
    return true;
};

// Change MP
// Game_RecordInterpreter.prototype.command312 = function () {
Game_RecordInterpreter.prototype.command312 = function (params) {
    return true;
};

// Change TP
// Game_RecordInterpreter.prototype.command326 = function () {
Game_RecordInterpreter.prototype.command326 = function (params) {
    return true;
};

// Change State
// Game_RecordInterpreter.prototype.command313 = function () {
Game_RecordInterpreter.prototype.command313 = function (params) {
    return true;
};

// Recover All
// Game_RecordInterpreter.prototype.command314 = function () {
Game_RecordInterpreter.prototype.command314 = function (params) {
    return true;
};

// Change EXP
// Game_RecordInterpreter.prototype.command315 = function () {
Game_RecordInterpreter.prototype.command315 = function (params) {
    return true;
};

// Change Level
// Game_RecordInterpreter.prototype.command316 = function () {
Game_RecordInterpreter.prototype.command316 = function (params) {
    return true;
};

// Change Parameter
// Game_RecordInterpreter.prototype.command317 = function () {
Game_RecordInterpreter.prototype.command317 = function (params) {
    return true;
};

// Change Skill
// Game_RecordInterpreter.prototype.command318 = function () {
Game_RecordInterpreter.prototype.command318 = function (params) {
    return true;
};

// Change Equipment
// Game_RecordInterpreter.prototype.command319 = function () {
Game_RecordInterpreter.prototype.command319 = function (params) {
    return true;
};

// Change Name
// Game_RecordInterpreter.prototype.command320 = function () {
Game_RecordInterpreter.prototype.command320 = function (params) {
    return true;
};

// Change Class
// Game_RecordInterpreter.prototype.command321 = function () {
Game_RecordInterpreter.prototype.command321 = function (params) {
    return true;
};

// Change Actor Images
// Game_RecordInterpreter.prototype.command322 = function () {
Game_RecordInterpreter.prototype.command322 = function (params) {
    return true;
};

// Change Vehicle Image
// Game_RecordInterpreter.prototype.command323 = function () {
Game_RecordInterpreter.prototype.command323 = function (params) {
    return true;
};

// Change Nickname
// Game_RecordInterpreter.prototype.command324 = function () {
Game_RecordInterpreter.prototype.command324 = function (params) {
    return true;
};

// Change Profile
// Game_RecordInterpreter.prototype.command325 = function () {
Game_RecordInterpreter.prototype.command325 = function (params) {
    return true;
};

// Change Enemy HP
// Game_RecordInterpreter.prototype.command331 = function () {
Game_RecordInterpreter.prototype.command331 = function (params) {
    return true;
};

// Change Enemy MP
// Game_RecordInterpreter.prototype.command332 = function () {
Game_RecordInterpreter.prototype.command332 = function (params) {
    return true;
};

// Change Enemy TP
// Game_RecordInterpreter.prototype.command342 = function () {
Game_RecordInterpreter.prototype.command342 = function (params) {
    return true;
};

// Change Enemy State
// Game_RecordInterpreter.prototype.command333 = function () {
Game_RecordInterpreter.prototype.command333 = function (params) {
    return true;
};

// Enemy Recover All
// Game_RecordInterpreter.prototype.command334 = function () {
Game_RecordInterpreter.prototype.command334 = function (params) {
    return true;
};

// Enemy Appear
// Game_RecordInterpreter.prototype.command335 = function () {
Game_RecordInterpreter.prototype.command335 = function (params) {
    return true;
};

// Enemy Transform
// Game_RecordInterpreter.prototype.command336 = function () {
Game_RecordInterpreter.prototype.command336 = function (params) {
    return true;
};

// Show Battle Animation
// Game_RecordInterpreter.prototype.command337 = function () {
Game_RecordInterpreter.prototype.command337 = function (params) {
    return true;
};

// Force Action
// Game_RecordInterpreter.prototype.command339 = function () {
Game_RecordInterpreter.prototype.command339 = function (params) {
    return true;
};

// Abort Battle
Game_RecordInterpreter.prototype.command340 = function () {
    return true;
};

// Open Menu Screen
Game_RecordInterpreter.prototype.command351 = function () {
    return true;
};

// Open Save Screen
Game_RecordInterpreter.prototype.command352 = function () {
    return true;
};

// Game Over
Game_RecordInterpreter.prototype.command353 = function () {
    return true;
};

// Return to Title Screen
Game_RecordInterpreter.prototype.command354 = function () {
    return true;
};

// Script
Game_RecordInterpreter.prototype.command355 = function () {
    while (this.nextEventCode() === 655) {
        this._index++;
    }
    return true;
};

// Plugin Command
// Game_RecordInterpreter.prototype.command356 = function () {
Game_RecordInterpreter.prototype.command356 = function (params) {
    return true;
};

(function () {
    'use strict'

    Array.prototype.find = function (callback, thisArg) {
        for (var i = 0; i < this.length; ++i) {
            if (callback.apply(thisArg, new Array(this[i]))) {
                return this[i];
            }
        }

        // not found
        return null;
    };

    Array.prototype.includes = function (v) {
        for (var i = 0; i < this.length; ++i) {
            if (this[i] === v) {
                return true;
            }
        }

        // not found
        return false;
    };

    Array.prototype.copy = function () {
        return [].concat(this);
    };

    Utils.clone = function (obj) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                var val = obj[attr];
                if ("object" != typeof val) {
                    copy[attr] = val;
                } else {
                    copy[attr] = Utils.clone(val);
                }
            }
        }
        return copy;
    };

})();




var Oggy_SwipeInput = {};
var _Oggy_SwipeInput_BufferLength = 20;

Oggy_SwipeInput.reset = function () {
    this._initialX = 0;
    this._initialY = 0;
    this._bufferX = [];
    this._bufferY = [];
    this._interia = 0;
    this._state = 0;
};

Oggy_SwipeInput.updateInput = function () {
    if (TouchInput.isPressed() && !this.isSwiping()) {
        this._startSwipe();
        this._state = 1;
    }
    if (!TouchInput.isPressed() && this.isSwiping()) {
        this._endSwipe();
        this._state = 0;
    }
    if (this._state !== 0) {
        this._updateSwipe();
    }
};

Oggy_SwipeInput.isSwiping = function () {
    return this._state !== 0;
};

Oggy_SwipeInput.getSwipeSpeed = function () {
    switch (this._state) {
        case 0:
            this._updateInteria();
            return this._interia;

        case 1:
            var lastIndex = this._bufferY.length - 1;
            if (Math.abs(this._bufferY[lastIndex] - this._initialY) > 5) {
                this._state = 2;
                return this._bufferY[lastIndex - 1] - this._bufferY[lastIndex];
            } else {
                return 0;
            }

        case 2:
            var lastIndex = this._bufferY.length - 1;
            return this._bufferY[lastIndex - 1] - this._bufferY[lastIndex];
    }
};

Oggy_SwipeInput._startSwipe = function () {
    this._initialX = TouchInput.x;
    this._initialY = TouchInput.y;
    this._bufferX = [TouchInput.x];
    this._bufferY = [TouchInput.y];
    this._interia = 0;
};

Oggy_SwipeInput._endSwipe = function () {
    this._interia = this.getSwipeSpeed();
    this._bufferX = [];
    this._bufferY = [];
};

Oggy_SwipeInput._updateSwipe = function () {
    if (this._bufferX.length === _Oggy_SwipeInput_BufferLength) {
        this._bufferX.shift();
        this._bufferY.shift();
    }
    this._bufferX.push(TouchInput.x);
    this._bufferY.push(TouchInput.y);
};

Oggy_SwipeInput._updateInteria = function () {
    var dumping = _OggySns.SwipeScrollDamping;
    if (this._interia > 0) {
        this._interia = Math.max(0, this._interia - dumping);
    } else if (this._interia < 0) {
        this._interia = Math.min(0, this._interia + dumping);
    }
};


function Entity_TalkRoomRecord() {
    this.initialize.apply(this, arguments);
};

Entity_TalkRoomRecord.prototype.initialize = function () {
    this._record = [];
    this._isEventRunning = false;
    this._talkEntities = [];
    this._interpreter = new Game_AtsuTalkInterpreter();
};

Entity_TalkRoomRecord.prototype.startAtsuTalkEvent = function (eventId) {
    if (!this._isEventRunning) {
        this._isEventRunning = true;
        this._record.push({ eventId: eventId, data: [] });
        this._talkEntities = [];

        var commonEvent = $dataCommonEvents[eventId];
        this._interpreter.setup(commonEvent.list, 0);
    } else {
        throw new Error("talk event has already running");
    }
};

Entity_TalkRoomRecord.prototype.addAtsuTalkTimestamp = function (timestamp) {
    if (this._isEventRunning) {
        if (timestamp < 10) {   // 0-9 is reserved as choice result
            timestamp = Date.now();// dummy
        }
        var lastRecord = this._record[this._record.length - 1];
        lastRecord.data.push(timestamp);
    } else {
        throw new Error("talk event is not running");
    }
};

Entity_TalkRoomRecord.prototype.addChoiceResult = function (choiceIndex) {
    if (this._isEventRunning) {
        var lastRecord = this._record[this._record.length - 1];
        lastRecord.data.push(choiceIndex);
    } else {
        throw new Error("talk event is not running");
    }
};

Entity_TalkRoomRecord.prototype.currentCommonEventId = function () {
    if (this._isEventRunning) {
        var lastRecord = this._record[this._record.length - 1];
        return lastRecord.eventId;
    } else {
        return 0;
    }
};

Entity_TalkRoomRecord.prototype.getTalkEntities = function () {
    if (this._isEventRunning) {
        return this._talkEntities;
    } else {
        return null;
    }
};

Entity_TalkRoomRecord.prototype.getInterpreter = function () {
    if (this._isEventRunning) {
        return this._interpreter;
    } else {
        return null;
    }
};

Entity_TalkRoomRecord.prototype.addTalkEntity = function (talkEntity) {
    if (this._isEventRunning) {
        this._talkEntities.push(talkEntity);
    } else {
        throw new Error("talk event is not running");
    }
};

Entity_TalkRoomRecord.prototype.endAtsuTalkEvent = function () {
    this._isEventRunning = false;
    this._talkEntities = [];
};

Entity_TalkRoomRecord.prototype.getRecordCount = function () {
    if (this._isEventRunning) {
        return this._record.length - 1;// ignore the last element
    } else {
        return this._record.length;
    }
};

Entity_TalkRoomRecord.prototype.getRecordEventIdByIndex = function (index) {
    return this._record[index].eventId;
};

Entity_TalkRoomRecord.prototype.getRecordDataByIndex = function (index) {
    return this._record[index].data;
};

Entity_TalkRoomRecord.prototype.clearAllRecord = function () {
    this._record = [];
    this._isEventRunning = false;
};

Entity_TalkRoomRecord.isChoiceIndex = function (rec) {
    return rec < 10;
};


function Entity_AtsuTalkRecord() {
    this.initialize.apply(this, arguments);
};

Entity_AtsuTalkRecord.prototype.initialize = function () {
    this._rooms = {};
    this._rooms[0] = new Entity_TalkRoomRecord();
    this._currentRoomId = 0;
};

Entity_AtsuTalkRecord.prototype.changeRoomId = function (roomId) {
    this._currentRoomId = roomId;
    if (!this._rooms.hasOwnProperty(roomId)) {
        this._rooms[roomId] = new Entity_TalkRoomRecord();
    }
};

Entity_AtsuTalkRecord.prototype.currentRoomId = function () {
    return this._currentRoomId;
};

Entity_AtsuTalkRecord.prototype.getCurrentTalkRoomRecord = function () {
    var roomId = this._currentRoomId;
    if (!this._rooms.hasOwnProperty(roomId)) {
        throw new Error("the talk room id = " + roomId + " is not created");
    }

    return this._rooms[roomId];
};

Entity_AtsuTalkRecord.prototype.clearAllRecord = function () {
    this._rooms = {};
    this._rooms[0] = new Entity_TalkRoomRecord();
    this._currentRoomId = 0;
};


var _Oggy_AtsuTalkLayout_Left = 0;
var _Oggy_AtsuTalkLayout_Right = 1;

var _Oggy_AtsuTalkEntityType_Text = 0;
var _Oggy_AtsuTalkEntityType_Stamp = 1;
var _Oggy_AtsuTalkEntityType_Picture = 2;

function Entity_AtsuTalk() {
    this.initialize.apply(this, arguments);
};

Entity_AtsuTalk.prototype.initialize = function (faceImageName, faceImageIndex, positionType, texts, timestamp) {
    this._p = [faceImageName, faceImageIndex, 0, 0, timestamp, 0, 0, 0, 0];

    switch (positionType) {
        case 0:
            this._p[2] = _Oggy_AtsuTalkLayout_Right;
            break;

        case 1:
            this._p[2] = _Oggy_AtsuTalkLayout_Left;
            break;

        case 2:
            this._p[2] = _Oggy_AtsuTalkLayout_Left;
            break;
    }

    if (texts.length >= 1) {
        this._name = this._convertEscapeCharacters(texts[0]);
    } else {
        this._name = "???";
    }

    this._p[3] = _Oggy_AtsuTalkEntityType_Text;
    this._serif = [];
    for (var i = 1; i < texts.length; ++i) {
        this._serif.push(this._convertEscapeCharacters(texts[i]));
    }
};

Entity_AtsuTalk.prototype.layoutType = function () {
    return this._p[2];
};

Entity_AtsuTalk.prototype.entityType = function () {
    return this._p[3];
};

Entity_AtsuTalk.prototype.height = function () {
    switch (this.entityType()) {
        case _Oggy_AtsuTalkEntityType_Text:
            return 150;

        case _Oggy_AtsuTalkEntityType_Stamp:
        case _Oggy_AtsuTalkEntityType_Picture:
            return 80 + this.imageSize().Height;
    }
};

Entity_AtsuTalk.prototype.imageSize = function () {
    switch (this.entityType()) {
        case _Oggy_AtsuTalkEntityType_Text:
            return null;

        case _Oggy_AtsuTalkEntityType_Stamp:
            return { "Width": this._p[7] != 0 ? this._p[7] : _OggySns.StampImageSize.Width, "Height": this._p[8] != 0 ? this._p[8] : _OggySns.StampImageSize.Height };

        case _Oggy_AtsuTalkEntityType_Picture:
            return { "Width": this._p[7] != 0 ? this._p[7] : _OggySns.PictureThumbnailImageSize.Width, "Height": this._p[8] != 0 ? this._p[8] : _OggySns.PictureThumbnailImageSize.Height };
    }
};

Entity_AtsuTalk.prototype.nameText = function () {
    return this._name;
};

Entity_AtsuTalk.prototype.serifText = function () {
    return this._serif;
};

Entity_AtsuTalk.prototype.timestamp = function () {
    return this._p[4] || 0;
};

Entity_AtsuTalk.prototype.faceImageName = function () {
    return this._p[0];
};

Entity_AtsuTalk.prototype.faceImageIndex = function () {
    if (this._isPlayerFace()) {
        return $gameVariables.value(_OggySns.PlayerFaceVariableId);
    } else {
        return this._p[1];
    }
};

Entity_AtsuTalk.prototype.pictureImageName = function () {
    return this._p[5] || "";
};

Entity_AtsuTalk.prototype.commonEventId = function () {
    return this._p[6] || 0;
};

Entity_AtsuTalk.prototype._convertEscapeCharacters = function (text, timestamp) {
    text = text.replace(/\\/g, '\x1b');
    text = text.replace(/\x1b\x1b/g, '\\');
    text = text.replace(/\x1bStamp\[(\w+),(\d+),(\d+)\]/gi, function () {
        this._p[3] = _Oggy_AtsuTalkEntityType_Stamp;
        this._p[5] = arguments[1];
        this._p[7] = Number(arguments[2]);
        this._p[8] = Number(arguments[3]);
        return '';
    }.bind(this));
    text = text.replace(/\x1bStamp\[(\w+)\]/gi, function () {
        this._p[3] = _Oggy_AtsuTalkEntityType_Stamp;
        this._p[5] = arguments[1];
        return '';
    }.bind(this));
    text = text.replace(/\x1bPicture\[(\w+),(\d+),(\d+),(\d+)\]/gi, function () {
        this._p[3] = _Oggy_AtsuTalkEntityType_Picture;
        this._p[5] = arguments[1];
        this._p[6] = Number(arguments[2]);
        this._p[7] = Number(arguments[3]);
        this._p[8] = Number(arguments[4]);
        return '';
    }.bind(this));
    text = text.replace(/\x1bPicture\[(\w+),(\d+)\]/gi, function () {
        this._p[3] = _Oggy_AtsuTalkEntityType_Picture;
        this._p[5] = arguments[1];
        this._p[6] = Number(arguments[2]);
        return '';
    }.bind(this));
    text = text.replace(/\x1bV\[(\d+)\]/gi, function () {
        return $gameVariables.value(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bN\[(\d+)\]/gi, function () {
        return this._actorName(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bT/gi, function () {
        return this._getDateString();
    }.bind(this));
    return text;
};

Entity_AtsuTalk.prototype._actorName = function (n) {
    var actor = n >= 1 ? $gameActors.actor(n) : null;
    return actor ? actor.name() : '';
};

Entity_AtsuTalk.prototype._isPlayerFace = function (n) {
    return this._p[0] === _OggySns.PlayerFaceImage;
};

Entity_AtsuTalk.prototype._getDateString = function () {
    var date = new Date(this.timestamp());
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = ('00' + date.getHours()).slice(-2);
    var min = ('00' + date.getMinutes()).slice(-2);
    return m + "/" + d + " " + h + ":" + min;
};

Entity_AtsuTalk.needTimestamp = function (texts) {
    for (var i = 0; i < texts.length; ++i) {
        if (texts[i].match(/\\T/gi) != null) {
            return true;
        }
    }
    return false;
};

function Node_AtsuTalk() {
    this.initialize.apply(this, arguments);
};

Node_AtsuTalk.prototype = Object.create(Node_Base.prototype);
Node_AtsuTalk.prototype.constructor = Node_AtsuTalk;

Node_AtsuTalk.prototype.initialize = function () {
    Node_Base.prototype.initialize.call(this, 548, 136, ["lower", "button"], 4);
    this._entity = null;
};

Node_AtsuTalk.prototype._createContents = function (layerIndex, w, h) {
    switch (layerIndex) {
        // background
        case 0:
            return new Sprite();

        // text
        case 1:
            var sprite = new Sprite();
            sprite.bitmap = new Bitmap(380, 120);
            return sprite;

        // face
        case 2:
            return new Sprite();

        // image
        case 3:
            return new Sprite();
    }
};

Node_AtsuTalk.prototype.create = function (entity) {
    if (this._isEnabled) {
        this.terminate();
    }

    this._entity = entity;
    if (this._entity !== null) {

        this.setVisible(true);
        var layout = this._entity.layoutType();
        var entityType = this._entity.entityType();
        var backgroundImageName = this._backgroundImageName(entityType, layout);
        if (backgroundImageName) {
            this._backgroundBitmap = ImageManager.loadPicture(backgroundImageName);
        } else {
            this._backgroundBitmap = null;
        }
        this._faceBitmap = ImageManager.loadFace(this._entity.faceImageName());
        this._pictureBitmap = ImageManager.loadPicture(this._entity.pictureImageName());
        var faceIndex = this._entity.faceImageIndex();

        this._contentsSprites[0].bitmap = this._backgroundBitmap;
        this._contentsSprites[2].bitmap = this._faceBitmap;
        this._contentsSprites[2].setFrame((faceIndex % 4) * 144, Math.floor(faceIndex / 4) * 144, 144, 144);
        if (entityType !== _Oggy_AtsuTalkEntityType_Text) {
            this._contentsSprites[3].visible = true;
            this._contentsSprites[3].bitmap = this._pictureBitmap;
        } else {
            this._contentsSprites[3].visible = false;
            this._contentsSprites[3].bitmap = null;
        }

        var imageSize = this._entity.imageSize();
        if (layout === _Oggy_AtsuTalkLayout_Left) {
            this._contentsSprites[1].x = 130;
            this._contentsSprites[2].x = -4;
            this._contentsSprites[2].y = -4;
            this._contentsSprites[3].x = 130;
            this._contentsSprites[3].y = 60;
        } else {
            this._contentsSprites[1].x = 0;
            this._contentsSprites[2].x = 302;
            this._contentsSprites[2].y = -4;
            if (entityType == _Oggy_AtsuTalkEntityType_Stamp ||
                entityType == _Oggy_AtsuTalkEntityType_Picture) {
                this._contentsSprites[3].x = 300 - imageSize.Width;
            }
            this._contentsSprites[3].y = 60;
        }
        var pos = this._basePosition(layout);
        Node_Base.prototype.create.call(this, pos.x, pos.y);
        if (entityType === _Oggy_AtsuTalkEntityType_Picture) {
            var sprite = this._contentsSprites[3];
            this.setTouchRegion([sprite.x, sprite.y, imageSize.Width, imageSize.Height]);
            this.setIsTouchEnabled(true);
        } else {
            this.setIsTouchEnabled(false);
        }


    } else {

        this.setVisible(false);
        var pos = this._basePosition(_Oggy_AtsuTalkLayout_Left);
        Node_Base.prototype.create.call(this, pos.x, pos.y);
        this.setIsTouchEnabled(false);
    }

};

Node_AtsuTalk.prototype.terminate = function () {
    if (!this._isEnabled) {
        return;
    }

    Node_Base.prototype.terminate.call(this);
    this._entity = null;
    this._backgroundBitmap = null;
    this._pictureBitmap = null;
    this._faceBitmap = null;
};

Node_AtsuTalk.prototype._refresh = function (layerIndex) {
    var contents = this._contentsSprites[layerIndex].bitmap;

    switch (layerIndex) {
        case 0:
            break;

        case 1:
            contents.clear();
            if (this._entity === null) {
                return;
            }

            var layout = this._entity.layoutType();
            //contents.fillAll("#ff0000");
            contents.fontSize = 21;
            switch (layout) {
                case _Oggy_AtsuTalkLayout_Left:
                    var x = 0;
                    var w = 170;
                    break;

                case _Oggy_AtsuTalkLayout_Right:
                    var x = 105;
                    var w = 195;
                    break;
            }
            var y = 27;
            //contents.paintOpacity = 100;
            //contents.fillRect(x, y, w, 20, "#ff0000");
            //contents.paintOpacity = 255;
            var text = this._entity.nameText();
            Text.drawText(contents, text, x, y, w, 20, _OggySns.NameTextStyle);

            switch (layout) {
                case _Oggy_AtsuTalkLayout_Left:
                    x = 5;
                    w = 400;
                    break;

                case _Oggy_AtsuTalkLayout_Right:
                    x = 8;
                    w = 300;
                    break;
            }
            y = 63;
            //contents.paintOpacity = 100;
            //contents.fillRect(x, y, w, 20, "#ff0000");
            //contents.paintOpacity = 255;
            for (var i = 0; i < this._entity.serifText().length; ++i) {
                var text = this._entity.serifText()[i];
                Text.drawText(contents, text, x, y, w, 20, _OggySns.TalkTextStyle);
                y += 28;
            }
            break;

        case 2:
            break;

        case 3:
            break;
    }
};

Node_AtsuTalk.prototype._isResourceReady = function () {
    if (this._backgroundBitmap && this._faceBitmap) {
        return this._backgroundBitmap.isReady() && this._faceBitmap.isReady();
    } else {
        return false;
    }
};

Node_AtsuTalk.prototype._backgroundImageName = function (entityType, layoutType) {
    switch (layoutType) {
        case _Oggy_AtsuTalkLayout_Left:
            if (entityType === _Oggy_AtsuTalkEntityType_Text) {
                return _OggySns.LeftTalkBackgroundImage;
            } else {
                return _OggySns.LeftPictureTalkBackgroundImage;
            }

        case _Oggy_AtsuTalkLayout_Right:
            if (entityType === _Oggy_AtsuTalkEntityType_Text) {
                return _OggySns.RightTalkBackgroundImage;
            } else {
                return _OggySns.RightPictureTalkBackgroundImage;
            }
    }
};

Node_AtsuTalk.prototype._basePosition = function (layoutType) {
    switch (layoutType) {
        case _Oggy_AtsuTalkLayout_Left:
            return new Point(30, 0);

        case _Oggy_AtsuTalkLayout_Right:
            return new Point(Graphics.width - 548 + 107 - 30, 0);
    }
};


// ----------------------------
// Service_AtsuTalk
// ----------------------------

function Service_AtsuTalk() {
    this.initialize.apply(this, arguments);
};

Service_AtsuTalk.prototype.initialize = function () {
    this._menu = new Menu_Base();
    this._choice = new Service_Choice();
    this._forceScroll = false;
    this._isValid = false;
};

Service_AtsuTalk.prototype.create = function () {
    var entities = this._loadTalkEntityFromRecord();
    entities = entities.concat($gameSystem._record.getCurrentTalkRoomRecord().getTalkEntities());
    this._menu.create(entities);
    this._choice.create();
    this._isValid = true;
};

Service_AtsuTalk.prototype.terminate = function () {
    if (this._isValid) {
        this._choice.terminate();
        this._isValid = false;
    }
};

Service_AtsuTalk.prototype.start = function () {
    if (this._isValid) {
        // nothing
    }
};

Service_AtsuTalk.prototype.stop = function () {
    if (this._isValid) {
        this._choice.stop();
    }
};

Service_AtsuTalk.prototype.canUpdate = function () {
    if (this._isValid) {
        if ($gameSwitches.value(_OggySns.DisableSnsSwitchId)) {
            SceneManager.currentScene().setVisible(false);
            return false;
        } else {
            SceneManager.currentScene().setVisible(true);
        }

        if ($gameSwitches.value(_OggySns.PauseSnsSwitchId)) {
            return false;
        }
        return true;
    } else {
        return false;
    }

}

Service_AtsuTalk.prototype.updatePre = function () {
    if (this._isValid) {
        if (!this.canUpdate()) {
            return;
        }

        this._choice.updateInput();

        if (this._menu != null) {
            this._menu.updateInput();
        }
    }
};

Service_AtsuTalk.prototype.updateInterpreter = function () {
    if (this._isValid) {
        if (!this.canUpdate()) {
            return;
        }

        var talkRoomRecord = $gameSystem._record.getCurrentTalkRoomRecord();
        if (talkRoomRecord.getInterpreter() != null) {
            talkRoomRecord.getInterpreter().update();
        }
    }
};

Service_AtsuTalk.prototype.updatePost = function () {
    if (this._isValid) {
        if (!this.canUpdate()) {
            return;
        }

        if (this._menu != null) {
            this._menu.updateScroll();
        }

        if (this._menu != null) {
            this._menu.update();
        }

        this._choice.update();
    }
};

Service_AtsuTalk.prototype.isReady = function () {
    return this._choice.isReady();
};

Service_AtsuTalk.prototype.isBusy = function () {
    return this._choice.isBusy();
};

Service_AtsuTalk.prototype.addAtsuTalk = function (entity) {
    if (this._isValid) {
        if (entity.timestamp() !== 0) {
            var talkRoomRecord = $gameSystem._record.getCurrentTalkRoomRecord();
            talkRoomRecord.addAtsuTalkTimestamp(entity.timestamp());
        }
        $gameSystem._record.getCurrentTalkRoomRecord().addTalkEntity(entity);
        this._menu.addEntity(entity, this._forceScroll);
        this._forceScroll = false;
    }
};

Service_AtsuTalk.prototype.startAtsuTalkEvent = function (commonEventId) {
    if (this._isValid) {
        var commonEvent = $dataCommonEvents[commonEventId];
        if (commonEvent) {
            var talkRoomRecord = $gameSystem._record.getCurrentTalkRoomRecord();
            talkRoomRecord.startAtsuTalkEvent(commonEventId);
        }
    }
};

Service_AtsuTalk.prototype.endAtsuTalkEvent = function () {
    if (this._isValid) {
        var talkRoomRecord = $gameSystem._record.getCurrentTalkRoomRecord();
        talkRoomRecord.endAtsuTalkEvent();
    }
};

Service_AtsuTalk.prototype.refresh = function () {
    if (this._isValid) {
        this._menu.terminate();
        var entities = this._loadTalkEntityFromRecord();
        entities = entities.concat($gameSystem._record.getCurrentTalkRoomRecord().getTalkEntities());
        this._menu.create(entities);
    }
};

Service_AtsuTalk.prototype.addChoice = function (choices, callback) {
    if (this._isValid) {
        this._choice.start(choices, callback);
        this._forceScroll = true;
    }
};

Service_AtsuTalk.prototype.isChoiceBusy = function () {
    if (this._isValid) {
        return this._choice.isBusy();
    } else {
        return false;
    }
};

Service_AtsuTalk.prototype.isPageScrolling = function () {
    if (this._isValid) {
        return this._menu.isPageScrolling();
    } else {
        return false;
    }
};

Service_AtsuTalk.prototype._loadTalkEntityFromRecord = function () {
    var entities = [];

    var interpreter = new Game_RecordInterpreter();
    var talkRoomRecord = $gameSystem._record.getCurrentTalkRoomRecord();
    for (var i = 0; i < talkRoomRecord.getRecordCount(); ++i) {
        var commonEventId = talkRoomRecord.getRecordEventIdByIndex(i);
        var data = talkRoomRecord.getRecordDataByIndex(i);
        interpreter.setup($dataCommonEvents[commonEventId].list, entities, data);
        interpreter.update();
        interpreter.clear();
    }

    return entities;
};

function Menu_Slot() {
    this.initialize.apply(this, arguments);
};

Menu_Slot.prototype.initialize = function (node, entry) {
    this._node = node;
    this._entry = entry;
};

Menu_Slot.prototype.create = function (entry) {
    this._node.create(entry.getRawEntity());
    this._entry = entry;
};

Menu_Slot.prototype.terminate = function () {
    this._node.terminate();
    this._entry = null;
};

function Menu_Entry() {
    this.initialize.apply(this, arguments);
};

Menu_Entry.prototype.initialize = function (entity) {
    this._entity = entity;
    this._worldRect = [0, 0];
    this._screenRect = [0, 0];
};

Menu_Entry.prototype.setWorldRect = function (top, bottom) {
    this._worldRect = [top, bottom];
};

Menu_Entry.prototype.getWorldRect = function () {
    return this._worldRect;
};

Menu_Entry.prototype.getScreenRect = function (viewport) {
    this._screenRect[0] = this._worldRect[0] - viewport[0];
    this._screenRect[1] = this._worldRect[1] - viewport[1];
    return this._screenRect;
};

Menu_Entry.prototype.getRawEntity = function () {
    return this._entity;
};

Menu_Entry.prototype.height = function () {
    if (this._entity === null) {
        return 150;
    } else {
        return this._entity.height();
    }
};

Menu_Entry.prototype.isVisible = function (viewport) {
    if (this._worldRect[1] < viewport[0] || viewport[1] < this._worldRect[0]) {
        return false;
    } else {
        return true;
    }
};

function Menu_ScrollTask() {
    this.initialize.apply(this, arguments);
};

Menu_ScrollTask.prototype.initialize = function () {
    this.clear();
};

Menu_ScrollTask.prototype.clear = function () {
    this._distance = 0;
    this._maxDuration = 0;
    this._duration = 0;
};

Menu_ScrollTask.prototype.updateViewport = function (viewport) {
    if (this._maxDuration > 0 && this._duration <= this._maxDuration) {
        var t = this._duration / this._maxDuration;
        viewport[0] = t * this._b[0] + (1 - t) * this._a[0];
        viewport[1] = t * this._b[1] + (1 - t) * this._a[1];
        this._duration++;
    }
};

Menu_ScrollTask.prototype.setFixedMove = function (a, b) {
    this._a = [].concat(a);
    this._b = [].concat(b);
    this._maxDuration = 10;
    this._duration = 1;
};


function Menu_Base() {
    this.initialize.apply(this, arguments);
};

Menu_Base.prototype.initialize = function () {
    this._entries = [];
    this._slots = [];
    this._marginCount = 1;
    this._viewport = [0, Graphics.height - 1];
    this._reservedSlot = [];
    this._scrollTask = new Menu_ScrollTask();
    this._isActive = false;
};

Menu_Base.prototype.create = function (talkEntities) {
    this._isActive = true;

    // add head margin
    for (var i = 0; i < this._marginCount; ++i) {
        this._entries.push(new Menu_Entry(null));
    }

    for (var i = 0; i < talkEntities.length; ++i) {
        this._entries.push(new Menu_Entry(talkEntities[i]));
    }

    // add tail margin
    for (var i = 0; i < this._marginCount; ++i) {
        this._entries.push(new Menu_Entry(null));
    }

    /*
    for (var i = 0; i < this._entries.length; ++i) {
        var worldRect = this._calcWorldRect(i);
        this._entries[i].setWorldRect(worldRect[0], worldRect[1]);
    }
    */
    var worldRect = [0, 0];
    var y = 0;
    for (var i = 0; i < this._entries.length; ++i) {
        if (_OggySns.ReverseTalkDirection) {
            worldRect[1] = y;
            y -= this._entries[i].height();
            worldRect[0] = y;
        } else {
            worldRect[0] = y;
            y += this._entries[i].height();
            worldRect[1] = y;
        }
        this._entries[i].setWorldRect(worldRect[0], worldRect[1]);
    }

    // create slot
    for (var i = 0; i < this.maxNodeCount(); ++i) {
        var slot = this._createSlot(new Menu_Entry(null));
        this._reservedSlot.push(slot);
    }

    this.lookAt(this._entries[this._entries.length - 1]);

    Oggy_SwipeInput.reset();
    this._refresh();
};

Menu_Base.prototype.terminate = function () {
    this._slots.forEach(function (slot) { slot.terminate(); });
    this._reservedSlot.forEach(function (slot) { slot.terminate(); });
    this._slots = [];
    this._reservedSlot = [];
    this._isActive = false;
    this._entries = [];
    this._viewport = [0, Graphics.height - 1];

};

Menu_Base.prototype.updateInput = function () {
    if (!this._isActive) {
        return;
    }

    for (var i = 0; i < this._slots.length; ++i) {
        var slot = this._slots[i];
        slot._node.updateInput();
    }
};

Menu_Base.prototype.updateScroll = function () {
    if (!this._isActive) {
        return;
    }

    this._processScrollMove();
};

Menu_Base.prototype.update = function () {
    if (!this._isActive) {
        return;
    }

    for (var i = 0; i < this._slots.length; ++i) {
        var slot = this._slots[i];
        slot._node.update();
        slot._node._spriteContainer.y = slot._entry.getScreenRect(this._viewport)[0];
    }
};

Menu_Base.prototype.setItemSelectedHandler = function (method) {
    this._itemSelectedHandler = method;
};

Menu_Base.prototype.maxItems = function () {
    return this._entries.length;
};

Menu_Base.prototype.maxCols = function () {
    return 1;
};

Menu_Base.prototype.maxVisualItemCount = function () {
    return Math.min(this.maxNodeCount(), this.maxItems());
};

Menu_Base.prototype.maxNodeCount = function () {
    return 7;
};

Menu_Base.prototype.scrollDown = function (speed) {
    if (_OggySns.ReverseTalkDirection) {
        var bottom = this._entries[0].getWorldRect()[1];
    } else {
        var bottom = this._entries[this._entries.length - 1].getWorldRect()[1];
    }
    if (bottom < this._viewport[1] + speed) {
        speed = Math.max(0, bottom - this._viewport[1]);
    }
    this._viewport[0] += speed;
    this._viewport[1] += speed;

    this._refresh();
};

Menu_Base.prototype.scrollUp = function (speed) {
    if (_OggySns.ReverseTalkDirection) {
        var top = this._entries[this._entries.length - 1].getWorldRect()[0];
    } else {
        var top = this._entries[0].getWorldRect()[0];
    }
    if (top > this._viewport[0] - speed) {
        speed = Math.max(0, this._viewport[0] - top);
    }
    this._viewport[0] -= speed;
    this._viewport[1] -= speed;

    this._refresh();
};

Menu_Base.prototype.isPageScrolling = function () {
    return this._entries[this._entries.length - 1].isVisible(this._viewport);
};

Menu_Base.prototype.addEntity = function (entity, forceScroll) {
    var entry = new Menu_Entry(entity);

    var isPageScroll = this.isPageScrolling() || forceScroll;

    if (this._marginCount === 0) {
        this._entries.push(entry);
        var newIndex = this._entries.length - 1;
    } else {
        this._entries.splice(-this._marginCount, 0, entry);
        var newIndex = this._entries.length - 1 - this._marginCount;
    }

    // todo optimize
    for (var i = newIndex; i < this._entries.length; ++i) {
        var worldRect = this._calcWorldRect(i);
        this._entries[i].setWorldRect(worldRect[0], worldRect[1]);
    }

    if (isPageScroll) {
        this._startLookAt(this._entries[this._entries.length - 1]);
    }

    this._refresh();
};

Menu_Base.prototype.lookAt = function (targetEntity) {
    if (_OggySns.ReverseTalkDirection) {
        var distance = Math.max(0, this._viewport[0] - targetEntity.getWorldRect()[0]);
        this._viewport[0] -= distance;
        this._viewport[1] -= distance;
    } else {
        var distance = Math.max(0, targetEntity.getWorldRect()[1] - this._viewport[1]);
        this._viewport[0] += distance;
        this._viewport[1] += distance;
    }
};

Menu_Base.prototype._createSlot = function (entry) {
    var node = new Node_AtsuTalk();
    node.create(entry.getRawEntity());
    node.setClickHandler(this._onClickEntry.bind(this, node));
    return new Menu_Slot(node, entry);
};

Menu_Base.prototype._onClickEntry = function (node) {
    if (node._entity !== null && node._entity.entityType() === _Oggy_AtsuTalkEntityType_Picture) {
        var commonId = node._entity.commonEventId();
        var event = $dataCommonEvents[commonId];
        if (commonId > 0 && !$gameMap.isEventRunning() && event) {
            $gameMap._interpreter.setup(event.list, null);
            return true;
        }
    }
    return false;
};

Menu_Base.prototype._processScrollMove = function () {
    Oggy_SwipeInput.updateInput();
    var speed = Oggy_SwipeInput.getSwipeSpeed();
    if (speed !== 0) {
        this._scrollTask.clear();
        if (speed > 0) {
            this.scrollDown(speed);
        } else {
            this.scrollUp(-speed);
        }
    } else {
        this._scrollTask.updateViewport(this._viewport);
        this._refresh();
    }

};

Menu_Base.prototype._startLookAt = function (targetEntity) {
    if (_OggySns.ReverseTalkDirection) {
        var distance = Math.max(0, this._viewport[0] - targetEntity.getWorldRect()[0]);
        this._scrollTask.clear();
        this._scrollTask.setFixedMove(this._viewport, [this._viewport[0] - distance, this._viewport[1] - distance]);
        Oggy_SwipeInput.reset();
    } else {
        var distance = Math.max(0, targetEntity.getWorldRect()[1] - this._viewport[1]);
        this._scrollTask.clear();
        this._scrollTask.setFixedMove(this._viewport, [this._viewport[0] + distance, this._viewport[1] + distance]);
        Oggy_SwipeInput.reset();
    }
};

Menu_Base.prototype._refresh = function () {

    // remove invisible slots
    for (var i = 0; i < this._slots.length;) {
        if (!this._slots[i]._entry.isVisible(this._viewport)) {
            var slot = this._slots.splice(i, 1)[0];
            slot.terminate();
            this._reservedSlot.push(slot);
        } else {
            ++i;
        }
    }

    // add visible slots
    for (var i = 0; i < this._entries.length; ++i) {
        if (this._entries[i].isVisible(this._viewport)) {
            var isFoundNode = false;
            for (var j = 0; j < this._slots.length; ++j) {
                if (this._entries[i] === this._slots[j]._entry) {
                    isFoundNode = true;
                    break;
                }
            }

            if (!isFoundNode) {
                // add slot
                if (this._reservedSlot.length === 0) {
                    throw new Error("out of reserved slot");
                } else {
                    // add slot
                    var slot = this._reservedSlot.pop();
                    slot.create(this._entries[i]);

                    if (this._slots.length === 0) {
                        this._slots.push(slot);
                    } else {
                        this._slots.splice(-this._marginCount, 0, slot);
                    }
                }
            }
        }
    }

};

Menu_Base.prototype._calcWorldRect = function (entityIndex) {
    var y = 0;
    if (_OggySns.ReverseTalkDirection) {
        for (var i = 0; i < entityIndex; ++i) {
            y -= this._entries[i].height();
        }
        return [y - this._entries[entityIndex].height(), y];
    } else {
        for (var i = 0; i < entityIndex; ++i) {
            y += this._entries[i].height();
        }
        return [y, y + this._entries[entityIndex].height()];
    }

};

var _Oggy_Window_Message_canStart = Window_Message.prototype.canStart;
Window_Message.prototype.canStart = function () {
    return _Oggy_Window_Message_canStart.apply(this) && !$gameSystem._isAtsutalkMessage;
};


var _Oggy_Choice_ImageHeight = 56;
var _Oggy_Choice_SpaceHeight = 15;

function Service_Choice() {
    this.initialize.apply(this, arguments);
};

Service_Choice.prototype.initialize = function () {
    this._state = 0;
    this._isValid = false;
};

Service_Choice.prototype.create = function () {
    this._nodes = [];
    for (var i = 0; i < 3; ++i) {
        var node = Node_ChoiceItem.createPictureImageButton(_OggySns.ChoiceItemBackgroundImage);
        this._nodes.push(node);
    }
    this._bgNode = Node_Picture.createPicture(_OggySns.ChoiceWindowBackgroundImage, [0, 0, Graphics.width, _Oggy_Choice_ImageHeight * 3], false);
    this._state = 0;
    this._callback = null;
    this._isValid = true;
};

Service_Choice.prototype.terminate = function () {
    if (this._isValid) {
        for (var i = 0; i < this._nodes.length; ++i) {
            this._nodes[i].terminate();
        }
        this._bgNode.terminate();
        this._nodes = [];
        this._isValid = false;
    }
};

Service_Choice.prototype.start = function (choices, callback) {
    if (this._isValid) {
        var y = Graphics.height - _Oggy_Choice_ImageHeight;
        var wait = 40;
        var space = (choices.length < 3) ? _Oggy_Choice_SpaceHeight : 0;

        this._bgNode.create(0, y);
        this._bgNode.tasks().move(30, new Point(0, y), new Point(0, y - _Oggy_Choice_ImageHeight * 2));
        for (var i = 0; i < choices.length; ++i) {
            this._nodes[i].create(0, y, choices[i]);
            this._nodes[i].tasks().move(30, new Point(0, y), new Point(0, y - _Oggy_Choice_ImageHeight * 2));
            this._nodes[i].tasks().wait(wait);
            this._nodes[i].setIsTouchEnabled(false);
            this._nodes[i].setClickHandler(this._onClickChoice.bind(this, this._nodes[i], i));
            this._nodes[i].setTouchRegion([0, 0, Graphics.width, _Oggy_Choice_ImageHeight]);
            y += (_Oggy_Choice_ImageHeight + space * 2);
        }

        this._state = 1;
        this._callback = callback;
    }
};

Service_Choice.prototype.stop = function () {
    if (this._isValid) {
        for (var i = 0; i < this._nodes.length; ++i) {
            this._nodes[i].terminate();
        }
        this._bgNode.terminate();
        this._state = 0;
        this._callback = null;
    }
};

Service_Choice.prototype.updateInput = function () {
    if (this._isValid) {
        for (var i = 0; i < this._nodes.length; ++i) {
            this._nodes[i].updateInput();
        }
    }
};

Service_Choice.prototype.update = function () {
    if (this._isValid) {
        switch (this._state) {
            case 0:
                break;

            case 1:
                if (!this._isBusy()) {
                    for (var i = 0; i < this._nodes.length; ++i) {
                        this._nodes[i].setIsTouchEnabled(true);
                    }
                }
                break;

            case 2:
                if (!this._isBusy()) {
                    this.stop();
                }
                break;

        }

        for (var i = 0; i < this._nodes.length; ++i) {
            this._nodes[i].update();
        }
        this._bgNode.update();
    }
};

Service_Choice.prototype.isReady = function () {
    return true;
};

Service_Choice.prototype.isBusy = function () {
    return this._isBusy() || this._state !== 0;
};

Service_Choice.prototype._isBusy = function () {
    if (this._isValid) {
        for (var i = 0; i < this._nodes.length; ++i) {
            if (this._nodes[i].isBusy()) {
                return true;
            }
        }
    }
    return false;
};

Service_Choice.prototype._onClickChoice = function (node, selectIndex) {
    if (this._state === 1) {
        SoundManager.playDecideChoiceSound();
        var talkRoomRecord = $gameSystem._record.getCurrentTalkRoomRecord();
        talkRoomRecord.addChoiceResult(selectIndex);
        this._callback.call(this, selectIndex);
        node.tasks().wait(30);
        //node.resetTouch();
        this._state = 2;
        return true;
    } else {
        return false;
    }

};

function Node_ChoiceItem() {
    this.initialize.apply(this, arguments);
};

Node_ChoiceItem.prototype = Object.create(Node_Base.prototype);
Node_ChoiceItem.prototype.constructor = Node_ChoiceItem;

Node_ChoiceItem.prototype.initialize = function (bitmap) {
    this._bitmap = bitmap;
    Node_Base.prototype.initialize.call(this, Graphics.width, _Oggy_Choice_ImageHeight, ["upper", "button"], 2);
};

Node_ChoiceItem.prototype.create = function (x, y, label) {
    Node_Base.prototype.create.call(this, x, y);
    this._isTouched = false;
    this._flashTimer = 0;
    this._contentsSprites[0].setBlendColor([255, 255, 255, 0]);
    this._label = label;
};

Node_ChoiceItem.prototype.update = function () {
    // update frame
    if (!this._isTouched) {
        if (this._touching) {
            this._isTouched = true;
            this._flashTimer = 16;
        }
    } else if (this._flashTimer > 0) {
        // touch animation
        var sprite = this._contentsSprites[0];
        var brightness = Math.min(0xff, (this._flashTimer % 8) * 24);
        this._contentsSprites[0].setBlendColor([255, 255, 255, brightness]);
        this._flashTimer--;
    }

    Node_Base.prototype.update.call(this);
};

Node_ChoiceItem.prototype.resetTouch = function () {
    this._isTouched = false;
};

Node_ChoiceItem.prototype._createContents = function (layerIndex, w, h) {
    var sprite = new Sprite();
    switch (layerIndex) {
        case 0:
            sprite.bitmap = this._bitmap;
            break;

        case 1:
            sprite.bitmap = new Bitmap(w, h);
            break;
    }

    return sprite;
};

Node_ChoiceItem.prototype._refresh = function (layerIndex) {
    var contents = this._contentsSprites[layerIndex].bitmap;
    switch (layerIndex) {
        case 0:
            break;

        case 1:
            contents.clear();
            contents.fontSize = 25;
            var x = 40;
            var y = 15;
            //contents.fillRect(x, y, 430, 30, '#ff0000');
            Text.drawText(contents, this._label, x, y, 430, 30, _OggySns.ChoiceTextStyle);
            break;
    }


};

Node_ChoiceItem.createPictureImageButton = function (name) {
    return new Node_ChoiceItem(ImageManager.loadPicture(name));
};



(function () {

    var _Oggy_Spriteset_Map_createUpperLayer = Spriteset_Map.prototype.createUpperLayer;
    Spriteset_Map.prototype.createUpperLayer = function () {
        this.createLowerPictures();
        _Oggy_Spriteset_Map_createUpperLayer.call(this);
    };

    Spriteset_Map.prototype.createLowerPictures = function () {
        var width = Graphics.boxWidth;
        var height = Graphics.boxHeight;
        var x = (Graphics.width - width) / 2;
        var y = (Graphics.height - height) / 2;
        this._lowerPictureContainer = new Sprite();
        this._lowerPictureContainer.setFrame(x, y, width, height);
        if ($gameMap.isSnsMapId($gameMap.mapId())) {
            if (_OggySns.MaxLowerPictureId > 0) {
                for (var i = 1; i <= _OggySns.MaxLowerPictureId; i++) {
                    this._lowerPictureContainer.addChild(new Sprite_Picture(i));
                }
            }
        }

        this.addChild(this._lowerPictureContainer);
    };

    var _Oggy_Spriteset_Map_createPictures = Spriteset_Map.prototype.createPictures;
    Spriteset_Map.prototype.createPictures = function () {
        if ($gameMap.isSnsMapId($gameMap.mapId())) {
            var width = Graphics.boxWidth;
            var height = Graphics.boxHeight;
            var x = (Graphics.width - width) / 2;
            var y = (Graphics.height - height) / 2;
            this._pictureContainer = new Sprite();
            this._pictureContainer.setFrame(x, y, width, height);
            for (var i = _OggySns.MaxLowerPictureId + 1; i <= $gameScreen.maxPictures(); i++) {
                this._pictureContainer.addChild(new Sprite_Picture(i));
            }
            this.addChild(this._pictureContainer);
        } else {
            _Oggy_Spriteset_Map_createPictures.apply(this);
        }
    };

    var _Oggy_Scene_Map_createWindowLayer = Scene_Map.prototype.createWindowLayer;
    Scene_Map.prototype.createWindowLayer = function () {
        this._lowerWindowLayer = new PIXI.Container();
        this._upperWindowLayer = new PIXI.Container();

        if (this._spriteset) {
            this._spriteset._lowerPictureContainer.addChild(this._lowerWindowLayer);
        } else {
            this.addChild(this._lowerWindowLayer);
        }
        this.addChild(this._upperWindowLayer);

        _Oggy_Scene_Map_createWindowLayer.call(this);
    };

    Scene_Map.prototype.setVisible = function (visible) {
        this._lowerWindowLayer.visible = visible;
        this._upperWindowLayer.visible = visible;
    };

    SceneManager.currentScene = function () {
        return this._scene;
    };

    SceneManager.lowerWindowLayer = function () {
        return SceneManager.currentScene()._lowerWindowLayer;
    };

    SceneManager.upperWindowLayer = function () {
        return SceneManager.currentScene()._upperWindowLayer;
    };

    var _Oggy_Scene_Map_initialize = Scene_Map.prototype.initialize;
    Scene_Map.prototype.initialize = function () {
        _Oggy_Scene_Map_initialize.call(this);
        this._atsuTalkService = new Service_AtsuTalk();
    };

    var _Oggy_Scene_Map_isReady = Scene_Map.prototype.isReady;
    Scene_Map.prototype.isReady = function () {
        return _Oggy_Scene_Map_isReady.call(this) &&
            this._atsuTalkService.isReady();
    };

    var _Oggy_Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
    Scene_Map.prototype.onMapLoaded = function () {
        _Oggy_Scene_Map_onMapLoaded.call(this);
        if ($gameMap.isSnsMapId($gameMap.mapId())) {
            this._atsuTalkService.create();
        }

        if (_OggySns.DebugEventTestBgGray && DataManager.isEventTest()) {
            this._spriteset._blackScreen.setColor(100, 100, 100);
        }
    };

    var _Oggy_Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function () {
        _Oggy_Scene_Map_start.call(this);
        this._atsuTalkService.start();
    };

    var _Oggy_Scene_Map_updateMain = Scene_Map.prototype.updateMain;
    Scene_Map.prototype.updateMain = function () {
        this._atsuTalkService.updatePre();
        if ($gameSystem._isAtsutalkMessage) {
            $gameSystem._isAtsutalkMessage = false;
            $gameMessage.clear();
        }
        _Oggy_Scene_Map_updateMain.call(this);
        this._atsuTalkService.updatePost();
    };

    var _Oggy_Game_Map_updateInterpreter = Game_Map.prototype.updateInterpreter;
    Game_Map.prototype.updateInterpreter = function () {
        _Oggy_Game_Map_updateInterpreter.apply(this);
        SceneManager.currentScene()._atsuTalkService.updateInterpreter();
    }

    Game_Map.prototype.isSnsMapId = function (mapId) {
        if (_OggySns.SnsMapId === 0) {
            return true;
        } else {
            return _OggySns.SnsMapId === mapId;
        }
    };

    var _Oggy_Scene_Map_stop = Scene_Map.prototype.stop;
    Scene_Map.prototype.stop = function () {
        _Oggy_Scene_Map_stop.call(this);
        this._atsuTalkService.stop();
    };

    var _Oggy_Scene_Map_isBusy = Scene_Map.prototype.isBusy;
    Scene_Map.prototype.isBusy = function () {
        return _Oggy_Scene_Map_isBusy.call(this) ||
            this._atsuTalkService.isBusy();
    };

    var _Oggy_Scene_Map_terminate = Scene_Map.prototype.terminate;
    Scene_Map.prototype.terminate = function () {
        _Oggy_Scene_Map_terminate.call(this);
        this._atsuTalkService.terminate();
    };

    var _Oggy_Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function () {
        _Oggy_Game_System_initialize.call(this);
        this._isAtsuTalkMode = false;
        this._record = new Entity_AtsuTalkRecord();
        this._isAtsutalkMessage = false;

        //window.RPGAtsumaru.comment.verbose = true;
    };

    var _Oggy_Game_Map_initialize = Game_Map.prototype.initialize;
    Game_Map.prototype.initialize = function () {
        _Oggy_Game_Map_initialize.apply(this, arguments);
        if (_OggySns.DebugSnsEventTest) {
            if (DataManager.isEventTest()) {
                this._interpreter = new Game_AtsuTalkInterpreter();// override atsu talk interpreter
            }
        }
    };

    var _Oggy_Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function () {
        _Oggy_Scene_Boot_start.apply(this);
        Text.initialize();
    };

})();