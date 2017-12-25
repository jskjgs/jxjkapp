package com.jinxin.hospHealth.utils;

import java.util.UUID;

/**
 * 基于java UUID生成器改写的简易标识生成器.
 * Created by wang on 2017/12/18.
 */
public class UniqueCodeGenerator {
    //CODE转换进制
    private static int RADIX = 36;
    private static int CODE_SIZE = 10;

    /**
     * 生成基于带指定前缀的唯一Code
     */
    public static String generate(long prefix) {
        return prefix + generate();
    }

    /**
     * 生成唯一Code
     */
    public static String generate() {
        String uuid = UUID.randomUUID().toString();
        String temp = uuid.replace("-", "");
        String id = temp.substring(0, CODE_SIZE);
        long number_16 = Long.valueOf(id, 16);
        return Long.toString(number_16, RADIX);
    }

    /**
     * 将Code码转换成数字
     */
    public static long transformCodeAsNumber(String code) {
        return Long.valueOf(code, RADIX);
    }

    /**
     * 将数字码转换成Code
     */
    public static String transformNumberAsCode(Long number) {
        return Long.toString(number, RADIX);
    }

    public static void main(String[] args) {
        String tem = generate();
        System.out.println(tem);
        System.out.println(transformCodeAsNumber(tem));
        long t = transformCodeAsNumber(tem);
        System.out.println(transformNumberAsCode(t));
    }
}