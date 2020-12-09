/**
 * @Author : leaf.fly(?)
 * @Create : 2020-09-28 18:09
 * @Desc : 业务对象接口约束
 * @Version : v1.0.0.20200928
 * @Blog : http://laiyefei.com
 * @Github : http://github.com/laiyefei
 */
import IPoto from "../IPoto";

export default interface IBo<PO> extends IPoto {

    /**
     * 获取PO对象
     *
     * @return
     */
    gainPO(): PO;
}