/**
 * @Author : leaf.fly(?)
 * @Create : 2020-09-28 18:09
 * @Desc : 持久化对象接口约束
 * @Version : v1.0.0.20200928
 * @Blog : http://laiyefei.com
 * @Github : http://github.com/laiyefei
 */
import IPoto from "../IPoto";
import IDto from "../dto/IDto";

export default interface IPo<DTO extends IDto> extends IPoto {
    /**
     * 创建数据传输对象
     *
     * @return
     */
    buildDto(): DTO;
}