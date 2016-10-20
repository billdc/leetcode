public class Solution {
    public List<String> restoreIpAddresses(String s) {
        List<String> ipList = new ArrayList<>();
        if(s.length() == 4){
            ipList.add(s.substring(0,1)+"."+s.substring(1,2)+"."+s.substring(2,3)+"."+s.substring(3,4));
            return ipList;
        }
        String ip;
        int ip1,ip2,ip3,ip4;
        int len = s.length();
        for(int i=1;i<4;i++){
            if(len - i>9) continue;
            for(int j=1;j<4;j++){
                if(len - i-j>6) continue;
                for(int m=1;m<4;m++){
                    if(len - i-j -m >3) continue;
                    for(int n=1;n<4;n++){
                        if(i+j+m+n != len){
                            continue;
                        }
                        ip = s.substring(0, i);
                        if (ip.startsWith("0") && i>1) {
                            continue;
                        }
                        ip1 = Integer.valueOf(ip);
                        if (ip1 > 255) {
                            continue;
                        }
                        ip = s.substring(i, i + j);
                        if (ip.startsWith("0") && j>1) {
                            continue;
                        }
                        ip2 = Integer.valueOf(ip);
                        if (ip2 > 255) {
                            continue;
                        }
                        ip = s.substring(i + j, i + j + m);
                        if (ip.startsWith("0") && m>1) {
                            continue;
                        }
                        ip3 = Integer.valueOf(ip);
                        if (ip3 > 255) {
                            continue;
                        }
                        ip = s.substring(i + j + m, i + j + m + n);
                        if (ip.startsWith("0") && n>1) {
                            continue;
                        }
                        ip4 = Integer.valueOf(ip);
                        if (ip4 > 255) {
                            continue;
                        }
                        ipList.add(ip1+"."+ip2+"."+ip3+"."+ip4);
                    }
                }
            }
        }
        return ipList;
    }
}
