package com.jinxin.hospHealth.service;

import com.aliyun.oss.OSSClient;
import com.aliyun.oss.model.PutObjectResult;
import com.doraemon.base.util.UUidGenerate;
import com.jinxin.hospHealth.utils.FileCheckUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;

/**
 * Created by zbs on 2018/1/14.
 */
@Service
public class OssFileService {

    @Value("${oss.accessKeyId}")
    String OSS_ACCESSKEYID;
    @Value("${oss.accessKeySecret}")
    String OSS_ACCESSKEYSECRET;
    @Value("${oss.endpoint}")
    String OSS_ENDPOINT;
    @Value("${oss.bucketName}")
    String OSS_BUCKETNAME;
    @Value("${nginx.html-path}")
    String nginxHtmlPath;
    @Value("${nginx.new-html-prefix}")
    String nginxHtmlPrefix;
    @Value("${oss.bucketUrl}")
    String ossBucketUrl;

    public String uploadImage(MultipartFile file,String folderPostition) throws IOException {
        OSSClient ossClient = new OSSClient(OSS_ENDPOINT, OSS_ACCESSKEYID, OSS_ACCESSKEYSECRET);
        String filePath = folderPostition+file.getOriginalFilename();
        PutObjectResult result = ossClient.putObject(OSS_BUCKETNAME,filePath, file.getInputStream());
        ossClient.shutdown();
        return ossBucketUrl + filePath;
    }

    public String uploadHtml(InputStream content,String htmlName) throws IOException {
        String filename = nginxHtmlPath+"/"+htmlName+".html";
        File file = new File(filename);
        if(file.exists())
            file.createNewFile();
        writeFileContent(file,content.toString());
        return nginxHtmlPrefix+"/"+htmlName+".html";


    }

    public void writeFileContent(File file,String content) throws IOException {
        FileOutputStream fileOutputStream = null;
        PrintWriter printWriter = null;
        try {
            fileOutputStream = new FileOutputStream(file);
            printWriter = new PrintWriter(fileOutputStream);
            printWriter.write(content.toCharArray());
            printWriter.flush();
        }finally {
            if(printWriter != null)
                printWriter.close();
            if(fileOutputStream != null)
                fileOutputStream.close();
        }
    }
}
