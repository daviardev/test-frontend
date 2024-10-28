import Title from '@/components/Reusable/Title'
import Card from '@/components/Cards/Card'
import SectionsLayout from '@/components/Layout/SectionsLayout'

export default function Second () {
  return (
    <>
      <SectionsLayout
        id='content_1'
      >
        <Title
          title='Regional leaders'
          description='We have a broad global presence, led by professionals with more than 10 years of experience in digital marketing.'
        />

        <Card />
      </SectionsLayout>
    </>
  )
}
