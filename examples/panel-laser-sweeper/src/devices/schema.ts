export const defaultSchema = [
  {
    attr: 672,
    canTrigger: false,
    code: 'switch_go',
    defaultRecommend: true,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-power',
    id: 1,
    mode: 'rw',
    name: '工作开关',
    property: {
      type: 'bool',
    },
    type: 'obj',
  },
  {
    attr: 672,
    canTrigger: false,
    code: 'pause',
    defaultRecommend: true,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_pause',
    id: 2,
    mode: 'rw',
    name: '暂停/继续',
    property: {
      type: 'bool',
    },
    type: 'obj',
  },
  {
    attr: 160,
    canTrigger: false,
    code: 'switch_charge',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-a_power',
    id: 3,
    mode: 'rw',
    name: '回充开关',
    property: {
      type: 'bool',
    },
    type: 'obj',
  },
  {
    attr: 704,
    canTrigger: true,
    code: 'mode',
    defaultRecommend: true,
    editPermission: false,
    executable: false,
    extContent: '{}',
    iconname: 'icon-dp_mode',
    id: 4,
    mode: 'rw',
    name: '工作模式',
    property: {
      range: ['smart', 'zone', 'pose', 'select_room', 'manual'],
      type: 'enum',
    },
    type: 'obj',
  },
  {
    attr: 706,
    canTrigger: true,
    code: 'status',
    defaultRecommend: true,
    editPermission: false,
    executable: false,
    extContent: '',
    iconname: 'icon-zhuangtai',
    id: 5,
    mode: 'ro',
    name: '机器状态:',
    property: {
      range: [
        'standby',
        'smart',
        'zone_clean',
        'part_clean',
        'cleaning',
        'paused',
        'goto_pos',
        'pos_arrived',
        'pos_unarrive',
        'goto_charge',
        'charging',
        'charge_done',
        'sleep',
        'select_room',
        'seek_dust_bucket',
        'collecting_dust',
        'relocation',
        'mapping',
        'mapping_done',
        'manual',
        'breakpoint_charging',
      ],
      type: 'enum',
    },
    type: 'obj',
  },
  {
    attr: 128,
    canTrigger: true,
    code: 'customize_mode_switch',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_power2',
    id: 6,
    mode: 'rw',
    name: '个性化清洁偏好开关',
    property: {
      type: 'bool',
    },
    type: 'obj',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'work_mode',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    id: 7,
    mode: 'rw',
    name: '工作模式',
    property: {
      range: ['both_work', 'only_sweep', 'only_mop'],
      type: 'enum',
    },
    type: 'obj',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'clean_times',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '{}',
    iconname: 'icon-dp_loop',
    id: 8,
    mode: 'rw',
    name: '工作次数',
    property: {
      unit: '',
      min: 1,
      max: 2,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 1152,
    canTrigger: true,
    code: 'suction',
    defaultRecommend: false,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-Strong',
    id: 9,
    mode: 'rw',
    name: '吸力选择',
    property: {
      range: ['closed', 'gentle', 'normal', 'strong', 'max'],
      type: 'enum',
    },
    type: 'obj',
  },
  {
    attr: 1152,
    canTrigger: true,
    code: 'cistern',
    defaultRecommend: false,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_water',
    id: 10,
    mode: 'rw',
    name: '水量选择',
    property: {
      range: ['closed', 'low', 'middle', 'high'],
      type: 'enum',
    },
    type: 'obj',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'mop_state',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    id: 11,
    mode: 'ro',
    name: '拖布安装状态',
    property: {
      range: ['none', 'installed'],
      type: 'enum',
    },
    type: 'obj',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'y_mop',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-a_mode_dry',
    id: 12,
    mode: 'rw',
    name: 'Y字型拖地开关',
    property: {
      type: 'bool',
    },
    type: 'obj',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'carpet_clean_prefer',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_mode',
    id: 13,
    mode: 'rw',
    name: '地毯清洁偏好',
    property: {
      range: ['evade', 'ignore'],
      type: 'enum',
    },
    type: 'obj',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'auto_boost',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_up',
    id: 14,
    mode: 'rw',
    name: '地毯增压开关',
    property: {
      type: 'bool',
    },
    type: 'obj',
  },
  {
    attr: 736,
    canTrigger: false,
    code: 'path_data',
    defaultRecommend: true,
    editPermission: false,
    executable: false,
    extContent: '',
    iconname: 'icon-dp_fly',
    id: 15,
    mode: 'rw',
    name: '路径传输',
    property: {
      type: 'raw',
      maxlen: 128,
    },
    type: 'raw',
  },
  {
    attr: 736,
    canTrigger: false,
    code: 'request',
    defaultRecommend: true,
    editPermission: false,
    executable: false,
    extContent: '',
    iconname: 'icon-dp_mode',
    id: 16,
    mode: 'rw',
    name: '请求数据',
    property: {
      range: ['get_map', 'get_path', 'get_both'],
      type: 'enum',
    },
    type: 'obj',
  },
  {
    attr: 736,
    canTrigger: false,
    code: 'command_trans',
    defaultRecommend: true,
    editPermission: false,
    executable: false,
    extContent: '',
    iconname: 'icon-dp_fly',
    id: 17,
    mode: 'rw',
    name: '协议指令传输',
    property: {
      type: 'raw',
      maxlen: 128,
    },
    type: 'raw',
  },
  {
    attr: 194,
    canTrigger: true,
    code: 'battery_percentage',
    defaultRecommend: false,
    editPermission: false,
    executable: false,
    extContent: '',
    iconname: 'icon-dp_battery',
    id: 18,
    mode: 'ro',
    name: '电池剩余电量',
    property: {
      unit: '%',
      min: 0,
      max: 100,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 224,
    canTrigger: false,
    code: 'device_timer',
    defaultRecommend: false,
    editPermission: false,
    executable: false,
    extContent: '',
    iconname: 'icon-dp_time2',
    id: 19,
    mode: 'rw',
    name: '设备本地定时',
    property: {
      type: 'raw',
      maxlen: 128,
    },
    type: 'raw',
  },
  {
    attr: 128,
    canTrigger: true,
    code: 'seek',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_magnifier',
    id: 20,
    mode: 'rw',
    name: '寻找机器',
    property: {
      type: 'bool',
    },
    type: 'obj',
  },
  {
    attr: 1248,
    canTrigger: false,
    code: 'direction_control',
    defaultRecommend: false,
    editPermission: true,
    executable: false,
    extContent: '',
    iconname: 'icon-dp_compass',
    id: 21,
    mode: 'rw',
    name: '方向遥控控制',
    property: {
      range: ['forward', 'backward', 'turn_left', 'turn_right', 'stop', 'exit'],
      type: 'enum',
    },
    type: 'obj',
  },
  {
    attr: 128,
    canTrigger: true,
    code: 'map_reset',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_loop',
    id: 22,
    mode: 'rw',
    name: '重置首页地图',
    property: {
      type: 'bool',
    },
    type: 'obj',
  },
  {
    attr: 224,
    canTrigger: false,
    code: 'disturb_time_set',
    defaultRecommend: false,
    editPermission: false,
    executable: false,
    extContent: '',
    iconname: 'icon-dp_time3',
    id: 23,
    mode: 'rw',
    name: '勿扰功能',
    property: {
      type: 'raw',
      maxlen: 128,
    },
    type: 'raw',
  },
  {
    attr: 1152,
    canTrigger: true,
    code: 'volume_set',
    defaultRecommend: false,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_voice',
    id: 24,
    mode: 'rw',
    name: '音量设置',
    property: {
      unit: '%',
      min: 0,
      max: 10,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 224,
    canTrigger: false,
    code: 'voice_data',
    defaultRecommend: false,
    editPermission: false,
    executable: false,
    extContent: '',
    iconname: 'icon-dp_mode',
    id: 25,
    mode: 'rw',
    name: '云端语音包数据下发',
    property: {
      type: 'raw',
      maxlen: 128,
    },
    type: 'raw',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'unit_set',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    id: 26,
    mode: 'rw',
    name: '面积单位设置',
    property: {
      range: ['square_meter', 'square_foot'],
      type: 'enum',
    },
    type: 'obj',
  },
  {
    attr: 128,
    canTrigger: true,
    code: 'break_clean',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_wash',
    id: 27,
    mode: 'rw',
    name: '断点续扫开关',
    property: {
      type: 'bool',
    },
    type: 'obj',
  },
  {
    attr: 160,
    canTrigger: false,
    code: 'dust_collection_switch',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_power2',
    id: 28,
    mode: 'rw',
    name: '立即集尘',
    property: {
      type: 'bool',
    },
    type: 'obj',
  },
  {
    attr: 192,
    canTrigger: true,
    code: 'dust_collection_num',
    defaultRecommend: false,
    editPermission: false,
    executable: false,
    extContent: '{}',
    iconname: 'icon-dp_wash',
    id: 29,
    mode: 'rw',
    name: '集尘频率设置',
    property: {
      unit: '次',
      min: 0,
      max: 4,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'child_lock',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_power2',
    id: 30,
    mode: 'rw',
    name: '设备按键童锁开关',
    property: {
      type: 'bool',
    },
    type: 'obj',
  },
  {
    attr: 1216,
    canTrigger: true,
    code: 'edge_brush_life',
    defaultRecommend: false,
    editPermission: true,
    executable: false,
    extContent: '',
    iconname: 'icon-icon-percent',
    id: 31,
    mode: 'rw',
    name: '边刷已使用时间',
    property: {
      unit: 'min',
      min: 0,
      max: 9000,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 1216,
    canTrigger: true,
    code: 'roll_brush_life',
    defaultRecommend: false,
    editPermission: true,
    executable: false,
    extContent: '',
    iconname: 'icon-icon-percent',
    id: 32,
    mode: 'rw',
    name: '滚刷已使用时间',
    property: {
      unit: 'min',
      min: 0,
      max: 18000,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 1216,
    canTrigger: true,
    code: 'filter_life',
    defaultRecommend: false,
    editPermission: true,
    executable: false,
    extContent: '',
    iconname: 'icon-dp_time2',
    id: 33,
    mode: 'rw',
    name: '滤芯已使用时间',
    property: {
      unit: 'min',
      min: 0,
      max: 9000,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 1216,
    canTrigger: true,
    code: 'rag_life',
    defaultRecommend: false,
    editPermission: true,
    executable: false,
    extContent: '',
    iconname: 'icon-icon-percent',
    id: 34,
    mode: 'rw',
    name: '拖布已使用时间',
    property: {
      unit: 'min',
      min: 0,
      max: 9000,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 1728,
    canTrigger: true,
    code: 'fault',
    defaultRecommend: true,
    editPermission: true,
    executable: false,
    extContent: '',
    iconname: 'icon-baojing',
    id: 35,
    mode: 'ro',
    name: '故障告警',
    property: {
      label: [
        'TE01',
        'TE02',
        'TE03',
        'TE04',
        'TE05',
        'TE06',
        'TE07',
        'TE08',
        'TE10',
        'TE11',
        'TE12',
        'TE13',
        'TE14',
        'TE17',
        'TE18',
        'TE19',
        'TE20',
        'TE23',
        'TE25',
        'TE26',
        'TE27',
        'TE28',
        'TF01',
        'TF02',
        'TF03',
        'TF04',
        'TF05',
        'TF06',
        'TF07',
      ],
      type: 'bitmap',
      maxlen: 29,
    },
    scope: 'fault',
    type: 'obj',
  },
  {
    attr: 1216,
    canTrigger: true,
    code: 'clean_time',
    defaultRecommend: false,
    editPermission: true,
    executable: false,
    extContent: '',
    iconname: 'icon-dp_time3',
    id: 36,
    mode: 'ro',
    name: '清扫时间',
    property: {
      unit: 'min',
      min: 0,
      max: 999999,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 1216,
    canTrigger: true,
    code: 'clean_area',
    defaultRecommend: false,
    editPermission: true,
    executable: false,
    extContent: '',
    iconname: 'icon-icon-test10',
    id: 37,
    mode: 'ro',
    name: '清扫面积',
    property: {
      unit: '㎡',
      min: 0,
      max: 999999,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 1216,
    canTrigger: true,
    code: 'clean_time_total',
    defaultRecommend: false,
    editPermission: true,
    executable: false,
    extContent: '',
    iconname: 'icon-dp_time3',
    id: 38,
    mode: 'ro',
    name: '总清扫时间',
    property: {
      unit: 'min',
      min: 0,
      max: 9999999,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 1216,
    canTrigger: true,
    code: 'clean_area_total',
    defaultRecommend: false,
    editPermission: true,
    executable: false,
    extContent: '',
    iconname: 'icon-tongji2',
    id: 39,
    mode: 'ro',
    name: '总清扫面积',
    property: {
      unit: '㎡',
      min: 0,
      max: 9999999,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 1216,
    canTrigger: true,
    code: 'clean_count_total',
    defaultRecommend: false,
    editPermission: true,
    executable: false,
    extContent: '',
    iconname: 'icon-tongji2',
    id: 40,
    mode: 'ro',
    name: '总清扫次数',
    property: {
      unit: '',
      min: 0,
      max: 9999999,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 224,
    canTrigger: false,
    code: 'device_info',
    defaultRecommend: false,
    editPermission: false,
    executable: false,
    extContent: '',
    iconname: 'icon-dp_mode',
    id: 41,
    mode: 'ro',
    name: '设备信息上报',
    property: {
      type: 'raw',
      maxlen: 128,
    },
    type: 'raw',
  },
  {
    attr: 64,
    canTrigger: true,
    code: 'alarm_time',
    defaultRecommend: false,
    editPermission: false,
    executable: false,
    extContent: '{"trigger":"direct"}',
    iconname: 'icon-dp_time2',
    id: 42,
    mode: 'ro',
    name: '消息推送',
    property: {
      unit: '',
      min: 0,
      max: 999,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'switch_led',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_power2',
    id: 43,
    mode: 'rw',
    name: '灯效开关',
    property: {
      type: 'bool',
    },
    type: 'obj',
  },
  {
    attr: 64,
    canTrigger: true,
    code: 'workstation_type',
    defaultRecommend: false,
    editPermission: false,
    executable: false,
    extContent: '',
    iconname: 'icon-dp_home',
    id: 44,
    mode: 'ro',
    name: '工作站类型',
    property: {
      range: ['charging_stand', 'dust_bucket', 'base_station', 'almighty_base'],
      type: 'enum',
    },
    type: 'obj',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'mcs_room_information',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '{}',
    id: 101,
    mode: 'ro',
    name: 'MCS房间信息',
    type: 'raw',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'mcs_command',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '{}',
    id: 102,
    mode: 'rw',
    name: 'MCS控制指令',
    type: 'raw',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'current_mapid',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    id: 103,
    mode: 'ro',
    name: '当前地图id',
    type: 'raw',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'imu_calibration',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    id: 104,
    mode: 'rw',
    name: '陀螺仪校准',
    property: {
      type: 'bool',
    },
    type: 'obj',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'device_log',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    id: 105,
    mode: 'rw',
    name: '获取设备日志权限',
    property: {
      type: 'bool',
    },
    type: 'obj',
  },
] as const;
