
import { useTranslation } from 'react-i18next'


const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className='text-xs text-white font-semibold flex justify-center items-center py-10 h-full lg:mt-8 ssm:mt-8 xs:mt-60'>
      {t('footer.design')}
    </div>
  )
}

export default Footer


