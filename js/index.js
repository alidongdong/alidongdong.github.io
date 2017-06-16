/*$('#main div img').mouseenter(function(){
    $(this).addClass('animated pulse');
});
$('#main div img').mouseleave(function(){
    $(this).removeClass('animated pulse');
});
*/
if(!window.jQuery){
    throw new Error('jd_index.js������jQuery��');}

//�ֲ���ͼ
    jQuery.fn.carousel = function() {
        var interval = 3000;    //ÿ������ֻ�һ��
        var duration = 500;     //ÿ���ֻ������ĳ���ʱ��
        var $imgList = this.children('img'); //���е�img��ɵ����������
        var $liList = this.find('li'); //���е�li��ɵ����������
        var cur = 0;  //��ǰ��ʾ�Ĺ������
        var next = 1; //�´μ���Ҫ��ʾ�Ĺ������


        //����һ����ʱ����ÿ��intervalʱ������һ���ֻ�
        setInterval(function () {
            lunHuan()
        }, interval);

        //Ϊÿ��li����¼�������������ֱ����ʾָ���Ĺ��
        $liList.click(function () {
            //cur 0    next 1       ���4��
            //cur 0    next 4
            var i = $liList.index(this);//�����li������li�е����
            next = i;
            //�����������ʼ����ֻ�
            lunHuan();
        });

        //���й���ֻ�
        function lunHuan() {
            //�õ�next��liԲ�����.active�����ֵ�ɾ��.active
            $liList.eq(next).addClass('active').siblings('.active').removeClass('active');
            //�õ�ǰ��ʾ�Ĺ�������������󻬶�������ȥ��ɾ��.active
            $imgList.eq(cur).animate({left: '-100%'}, duration, function () {
                $(this).removeClass('active');
            })
            //�ü���Ҫ��ʾ����һ�Ź�����.active�����������Ҳ࣬��ʼ�����������󻬶�
            $imgList.eq(next).addClass('active').css('left', '100%').animate({left: '0'}, duration);
            //�޸�cur��next������ֵ,��cur�����ߺ�next������
            cur = next;  //<=0     <=1
            next++;
            if (next >= $imgList.length) {
                next = 0;
            }
        }
    }
